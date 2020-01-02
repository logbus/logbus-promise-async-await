import { Component } from '@angular/core';
import { Exercise } from './exercises/exercise'
import { Exercise01 } from './exercises/exercise01'
import { Exercise02 } from './exercises/exercise02'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public currentExercise: Exercise;

  public loadExercise1() {
    this.currentExercise = new Exercise01();
  }

    public loadExercise2() {
    this.currentExercise = new Exercise02();
  }
}
