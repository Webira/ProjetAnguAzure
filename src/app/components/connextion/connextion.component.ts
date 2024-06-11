import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connextion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connextion.component.html',
  styleUrl: './connextion.component.css'
})
export class ConnextionComponent {

  constructor(public auth: AuthService) { }
  
  isConnected = true;
}
