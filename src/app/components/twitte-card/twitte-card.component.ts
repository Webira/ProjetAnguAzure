import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twitte-card',
  standalone: true,
  imports: [],
  templateUrl: './twitte-card.component.html',
  styleUrl: './twitte-card.component.css'
})
export class TwitteCardComponent {
  //decsende l'info de parent(tweet) aux enfants(tweet-card)
  @Input()
  tweet: any;
  
  // monter l'info(evenement) de enfant à parent
  @Output()
  ring = new EventEmitter<any>();

  constructor(public router: Router) { }

  /*ft_output(tweet:any) {
    this.ring.emit(tweet);
  }*/
  ft_output(tweet: any) {
    this.router.navigate(['/curent-tweet', tweet.id]);

  }
}
