import { Component, EventEmitter, Input, Output, input } from '@angular/core';

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
  ring = new EventEmitter<Number>();

  constructor() { }
    ft_output(nb: Number) {
      this.ring.emit(nb);
      
      console.log(this.tweet)
      return this.tweet
  }
}
