import {lf, Exercise} from './exercise'

export class ExerciseAsync2 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = "Async-2"
    this.info = 
  'Event Loop and Microtasks as results of promises.' + lf +
  'Microtasks are only executed when the call stack is empty.' + lf +
  'In this example the two parts of an expression are evaluated at two different timeslots,' +lf +
  'the first part directly and the second part as a micro tast later.';
    this.solutionUrl = 'https://www.youtube.com/watch?v=bfxglBVSNDI&list=WL&index=70&t=0s';
    this.infoUrl= 'https://www.youtube.com/watch?v=cCOL7MC4Pl0&list=WL&index=66';
    this.infoUrlName = 'What is the event loop (Tasks, MikroTasks, Rendering)';
    this.code =
'// What is logged when you call the run() method?' + lf + lf +
'private x: number;' + lf + lf +
'public async run() {' + lf +
'  this.x = 0;' + lf +
'  await this.compute();' + lf +
'  this.x += 1;' + lf +
'  this.doLog("run() x = " + this.x);' + lf +
'}' + lf + lf +
'private async compute() {' + lf +
'  this.x += await 2;' + lf +
'  this.doLog("compute() x = " + this.x);' + lf +
'};';

this.solution = 
'compute() x = 2' + lf +
'run() and x = 3' + lf + lf +
'Now we wait for compute() to complete (see also Exercise-1)' + lf +
'An async method implicitly returns a promise and await waits for the code' + lf +
'that will be executed as a micro task as soon as the call stack is empty.' + lf + lf +
'==> Keep in mind: Global variables and async await may be problematic!';
  
}

  public async run(doLog: (string) => void) {
    this.doLog = doLog;

    this.x = 0;
    await this.compute();
    this.x += 1;
    this.doLog('run() x = ' + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog('compute() x = ' + this.x);
  }
}