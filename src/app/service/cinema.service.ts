import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  
  
  
  
 

  public host:string="http://localhost:8084"

  constructor(private http:HttpClient) { }

  public getVilles(){

    return this.http.get(this.host+"/villes");

  }
  getCinemas(v :any) {
     return this.http.get(v._links.cinemas.href);
  }
  getsalles(c: any) {
   return this.http.get(c._links.salles.href)
  }
  getProjections(salle: any) {

   let url=salle._links.projections.href.replace("{?projection}","");;
   return this.http.get(url+"?projection=p1");
  }
  getTicketsPlaces(p: any) {
    let url=p._links.tickets.href.replace("{?projection}","");;
   return this.http.get(url+"?projection=ticketProj");
    
  }
  payerTickets(dataForm: any) {
   
    return this.http.post(this.host+"/payerTickets",dataForm);
  }
}
