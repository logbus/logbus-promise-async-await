import { Component } from '@angular/core';
import { Exercise, Exercise1 } from './exercise/exercises'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public currentExercise: Exercise;

  public loadExercise1() {
    this.currentExercise = new Exercise1();
  }
}
