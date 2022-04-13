import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal (1, 'watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal (2, 'buy cookies', 'I have to buy cookies for the parrot'),
    new Goal (3, 'get new phone case', 'Diana has her birthday coming up soon'),
    new Goal (4, 'buy dog food', 'Pupper likes expensive sancks'),
    new Goal (5,  'do math homework',  'Damn math' ),
    new Goal (6, 'plot my world domination plan', "Cause I'm an evil overload"),
  ];
  constructor() {}

  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if(isComplete){

    this.goals.splice(index, 1)
    }

  }
  ngOnInit(): void {}
}
