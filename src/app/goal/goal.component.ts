import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    {
      id: 1,
      name: 'watch finding Nemo',
      description: 'Find an online version and watch merlin find his son',
    },
    {
      id: 2,
      name: 'buy cookies',
      description: 'I have to buy cookies for the parrot',
    },
    {
      id: 3,
      name: 'get new phone case',
      description: 'Diana has her birthday coming up soon',
    },
    {
      id: 4,
      name: 'buy dog food',
      description: 'Pupper likes expensive sancks',
    },
    { id: 5, name: 'do math homework', description: 'Damn math' },
    {
      id: 6,
      name: 'plot my world domination plan',
      description: "Cause I'm an evil overload",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
