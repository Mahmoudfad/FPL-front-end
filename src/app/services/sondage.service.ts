import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SondageService {
  baseURL= environment.baseURL

  constructor(public http:HttpClient) { }
  addSondage(data: any)
  {
    return this.http.post( this.baseURL + '/sondage/add',data)
  }
  getAllSondage()
  {         
    return this.http.get(this.baseURL + '/sondage/getAllsondage')
  } 
  updateSondage(id:any,updatedSondage:any){
    return this.http.put(this.baseURL + '/sondage/updateSondage/'+ id,updatedSondage)
}

}
