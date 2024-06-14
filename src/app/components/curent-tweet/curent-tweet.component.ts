import { Component, Input } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-curent-tweet',
  standalone: true,
  imports: [],
  templateUrl: './curent-tweet.component.html',
  styleUrl: './curent-tweet.component.css'
})
export class CurentTweetComponent {
  @Input()
  curentTweet: any;
  
  // monter l'info(evenement) de enfant à parent
 /* @Output()
  ring = new EventEmitter<any>();*/

  constructor(public auth : AuthService) {
    
  }
  
}
