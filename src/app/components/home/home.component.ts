import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  varNomPren: any;

  constructor(public auth: AuthService, public http: HttpClient) {
  }
  
  callNom() {
    this.http.get("https://azurefunctionirina.azurewebsites.net/api/HttpTrigger_IrinaGuery?code=RinTem76xqGF2dCnmrSf2GFJ1umnuGKbl2poUybDqd9jAzFuu_vWnQ%3D%3D").subscribe((data : any) => {
      console.log(data);
       this.varNomPren = data.value;
    })
  }

  /*img = '';
	titre = '';
	constructor(public auth: AuthService, public http: HttpClient) {
		this.http.get("https://backendchristopherloisel.azurewebsites.net/api/backGet?").subscribe((data: any) => {
			console.log(data);
			this.img = data.contenu;
			this.titre = data.titre;
		})
	} */

}
