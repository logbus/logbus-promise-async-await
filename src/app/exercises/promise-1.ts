import { Exercise } from "./exercise";

export class ExerciseAsync1 extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = "Promise-1";
    this.question = "What is logged when you call the run() method?";
    this.info = `
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = 
`private x: number;

public run() {
  this.x = 0;
  this.compute();
  this.x += 1;
  this.doLog("run() x = " + this.x);
}

private async compute() {
  this.x += await 2;
  this.doLog("compute() x = " + this.x);
};
`;
    this.solutionUrl = null;
    this.solution = `run() x = 1
compute() and x = 2

public run() {
  this.x = 0;
  this.compute();
  this.x = this.x + 1;
  this.doLog("run() x = " + this.x);
}
private async compute(): Promise<any> {
  this.x = this.x + Promise.resolve(2);
           // this.x on the right is evaluated to 0 when method compute is called
           // Promise.resolve(2) is evaluated as a micro task after the call stack is empty
           // and this is when the run() method has been completed, also compute is finished after run()!
  this.doLog("compute() x = " + this.x);
};
==> Keep in mind: Global variables and async await may be problematic!';
`;
  }

  public run(doLog: (string) => void) {
    this.doLog = doLog;

    this.x = 0;
    this.compute();
    this.x += 1;
    this.doLog("run() x = " + this.x);
  }

  private async compute() {
    this.x += await 2;
    this.doLog("compute() x = " + this.x);
  }
}
