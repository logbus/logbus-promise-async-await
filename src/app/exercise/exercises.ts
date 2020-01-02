const lf = '\n';

export abstract class Exercise {
  public name: string;
  public infoUrl: string;
  public infoUrlName: string;
  public code: string;
  public solution: string;
  public solutionUrl: string;
  protected doLog: (string) => void;

  public abstract run(doLog: (string) => void);
}


export class Exercise1 extends Exercise {
  private x = 0;

  public constructor() {
    super();
    this.name = 'Excercise-1';
    this.solutionUrl = 'https://www.youtube.com/watch?v=bfxglBVSNDI&list=WL&index=70&t=0s';
    this.infoUrl= 'https://www.youtube.com/watch?v=cCOL7MC4Pl0&list=WL&index=66';
    this.infoUrlName = 'What is the event loop (Tasks, MikroTasks, Rendering';
    this.code =
'// What is logged when you call the run() method?' + lf +  
'public run() {' + lf +
'  this.x = 0;' + lf +
'  this.compute();' + lf +
'  this.x += 1;' + lf +
'  this.doLog("x = " + this.x);' + lf +
'}' + lf + lf +
'private async compute() {' + lf +
'  this.x += await 2;' + lf +
'  this.doLog("x = " + this.x);' + lf +
'};';

this.solution = 'x = 1 and x = 2';   
  
}

  public run(doLog: (string) => void) {
    this.doLog = doLog;

    this.x = 0;
    this.compute();
    this.x += 1;
    this.doLog('x = ' + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog('x = ' + this.x);
  }
}