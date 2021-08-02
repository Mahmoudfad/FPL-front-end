import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SondageService } from '../services/sondage.service';
@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  sondageForm!: FormGroup;

  constructor(public snackBar: MatSnackBar,private sondageService: SondageService) { }

  ngOnInit(): void {
    
    this.sondageForm = new FormGroup({
      
      titre : new FormControl('', Validators.required),
      sujet : new FormControl('', Validators.required),
    });
  }

  ajouter(){
  if (this.sondageForm.valid ) {
    this.sondageService.addSondage(this.sondageForm.value).subscribe((res)=>{
      this.snackBar.open('le sondage est ajouté avec  succès', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    })
    this.sondageForm.reset() 
  }
  else {
    this.snackBar.open("erreur", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
  }
}

}
