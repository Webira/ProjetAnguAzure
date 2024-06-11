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

  //varNomPren: any;
  affichNom: any;

  constructor(public auth: AuthService, public http: HttpClient) {
  }
  
  callNom() {
    this.http.get("https://azurefunctionirina.azurewebsites.net/api/HttpTrigger_IrinaGuery?").subscribe((data : any) => {
      console.log(data);
       this.affichNom = data.nomPrenom;
    })
  }

}
