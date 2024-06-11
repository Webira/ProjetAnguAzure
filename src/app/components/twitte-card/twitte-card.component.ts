import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

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

  // Observable blag
  varImg: any;

  callImag() {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data: any) => {
      console.log(data);
      this.varImg = data.value;
    })
  }

  constructor(public router: Router, public auth : AuthService, public http: HttpClient) { }

  /*ft_output(tweet:any) {
  }*/
  ft_output(tweet: any) {
    this.router.navigate(['/curent-tweet', tweet.id]);
    this.auth.currentTweet = tweet;
      
    }
  }
