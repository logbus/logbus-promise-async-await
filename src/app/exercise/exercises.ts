const lf = '\n';

export abstract class Exercise {
  public info: string;
  public infoUrl: string;
  public infoUrlName: string;
  public code: string;
  public solution: string;
  public solutionUrl: string;
  protected doLog: (string) => void;

  public abstract run(doLog: (string) => void);
}


export class Exercise1 extends Exercise {
  private x: number;

  public constructor() {
    super();
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
'public run() {' + lf +
'  this.x = 0;' + lf +
'  this.compute();' + lf +
'  this.x += 1;' + lf +
'  this.doLog("run() x = " + this.x);' + lf +
'}' + lf + lf +
'private async compute() {' + lf +
'  this.x += await 2;' + lf +
'  this.doLog("compute() x = " + this.x);' + lf +
'};';

this.solution = 
'run() x = 1' + lf +
'compute() and x = 2' + lf + lf +
'public run() {' + lf +
'  this.x = 0;' + lf +
'  this.compute();' + lf +
'  this.x = this.x + 1;' + lf +
'  this.doLog("run() x = " + this.x);' + lf +
'}' + lf + lf +
'private async compute(): Promise<any> {' + lf +
'  this.x = this.x + Promise.resolve(2);' + lf +
'           // this.x on the right is evaluated to 0 when method compute is called' + lf +
'           // Promise.resolve(2) is evaluated as a micro task after the call stack is empty' + lf +
'           // and this is when the run() method has been completed, also compute is finished after run()!' + lf +
'  this.doLog("compute() x = " + this.x);' + lf +
'};' + lf + lf +
'==> Keep in mind: Global variables and async await may be problematic!';
  
}

  public run(doLog: (string) => void) {
    this.doLog = doLog;

    this.x = 0;
    this.compute();
    this.x += 1;
    this.doLog('run() x = ' + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog('compute() x = ' + this.x);
  }
}

export class Exercise2 extends Exercise {
  private x: number;

  public constructor() {
    super();
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