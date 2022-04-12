import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    { id: 1, name: 'watch finding Nemo' },
    { id: 2, name: 'buy cookies' },
    { id: 3, name: 'get new phone case' },
    { id: 4, name: 'buy dog food' },
    { id: 5, name: 'do math homework' },
    { id: 6, name: 'plot my world domination plan' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
