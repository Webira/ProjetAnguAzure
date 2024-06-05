import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnextionComponent } from './components/connextion/connextion.component';
import { TwittesComponent } from './components/twittes/twittes.component';
import { CurentTweetComponent } from './components/curent-tweet/curent-tweet.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'connextion', component: ConnextionComponent },
    { path: 'twittes', component: TwittesComponent },
    { path: 'curent-tweet/:id', component: CurentTweetComponent },
];
