import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(
      1,
      'watch finding Nemo',
      'Find an online version and watch merlin find his son',
      new Date(2022, 3, 13)
    ),
    new Goal(
      2,
      'buy cookies',
      'I have to buy cookies for the parrot',
      new Date(2022, 6, 9)
    ),
    new Goal(
      3,
      'get new phone case',
      'Diana has her birthday coming up soon',
      new Date(2022, 5, 8)
    ),
    new Goal(
      4,
      'buy dog food',
      'Pupper likes expensive sancks',
      new Date(2023, 1, 14)
    ),
    new Goal(5, 'do math homework', 'Damn math', new Date(2023, 11, 11)),

    // new Goal(6,'plot my world domination plan','Cause I am an evil overlord',new Date(1997,09,12)),


    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];
  constructor() {}

  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }
  ngOnInit(): void {}
}
