import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal | undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  // goDelete(boolean){
  //   this.goal = !this.goal
  // }

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }
  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
}