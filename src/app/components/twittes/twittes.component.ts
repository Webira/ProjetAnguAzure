import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TwitteCardComponent } from '../twitte-card/twitte-card.component';
import { CurentTweetComponent } from '../curent-tweet/curent-tweet.component';

@Component({
  selector: 'app-twittes',
  standalone: true,
  imports: [CommonModule,
    TwitteCardComponent,
    CurentTweetComponent
  ],
  templateUrl: './twittes.component.html',
  styleUrl: './twittes.component.css'
})
export class TwittesComponent {

  constructor() { }
  isConnected = true;
  
  curentTweet: any;

  tweetList = [
    {
      id: 1,
      username: 'User1',
      content: 'Content1',
    },
    {
      id: 2,
      username: 'User2',
      content: 'Content2',
    },
    {
      id: 3,
      username: 'User3',
      content: 'Content3',
    },
  ];
  /*afficherElement(id: Number) {
    console.log(id);
  }*/

  afficherElement(tweet: any) {
    console.log(tweet);
    this.curentTweet = tweet;

  }
}