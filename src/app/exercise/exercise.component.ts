import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from './exercises';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise: Exercise;
  public showSolution: boolean;
  public logs: Array<string>;

  constructor() { 
    this.showSolution = false;
    this.logs = [];
  }

  ngOnInit() {
  }

  public toggleSolution() {
    this.showSolution = !this.showSolution;
    if (!this.showSolution) {
      this.logs = [];
    }
  }

  public doLog(message: string) {
    this.logs.push(message);
  }
  
  public runExercise() {
    this.logs = [];
    this.exercise.run(this.doLog.bind(this));
  }

}