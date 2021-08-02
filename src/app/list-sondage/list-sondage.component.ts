import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SondageService } from '../services/sondage.service';
@Component({
  selector: 'app-list-sondage',
  templateUrl: './list-sondage.component.html',
  styleUrls: ['./list-sondage.component.css']
})
export class ListSondageComponent implements OnInit {
  ListSondage=[] as any;
  constructor(private sondageService: SondageService) { }

  sondage : any
  ngOnInit(): void {
    this.sondageService.getAllSondage().subscribe((res: any)=>{this.ListSondage=res},
    (erreur:any)=>{console.log(erreur);
    },
    ()=>console.log(this.ListSondage));
    
  }

  responseForm:any
selected:any
radioChangeHandler(event:any){
  this.selected=event.target.value
  console.log(this.selected);
  
}


sendResponse(i:any){

 if (this.selected =="oui") {
   this.sondage[i].reponse.oui=this.sondage[i].reponse.oui+1
 }

 else if(this.selected=="non"){
  this.sondage[i].reponse.non=this.sondage[i].reponse.non+1
 }
  
 this.sondageService.updateSondage(this.sondage[i]._id,this.sondage[i]).subscribe(response=>{
   console.log(response);
   
 })

}








}
