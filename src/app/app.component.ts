import { Component } from '@angular/core';
import { Exercise } from './exercises/exercise'
import { ExerciseAsync1 } from './exercises/exercise-async-1'
import { ExerciseAsync2 } from './exercises/exercise-async-2'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public readonly exercises: Array<Exercise> = [
    new ExerciseAsync1(), 
    new ExerciseAsync2()
  ];
  public currentExercise: Exercise;
}
