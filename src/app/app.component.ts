import { Component } from '@angular/core';
import { Goal } from './goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // goals:string[]
  goals:Goal[]=[
    {id:1, name:'watch finding Nemo'},
    {id:2, name:'buy cookies'},
    {id:3,name:'get new phone case'},
    {id:4,name:'buy dog food'},
    {id:5, name:'do math homework'},
    {id:6, name:'plot my world domination plan'}
  ]

  constructor(){
    // this.goals=['watch an episode of finding Nemo', 'buy cookies', 'get new phone case']

  }
}
