import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

  variable: any;

  constructor(public auth: AuthService, public http: HttpClient) {
  }
  
  call() {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data : any) => {
      console.log(data);
       this.variable = data.value;
    })
  }

  isConnected = true;
}