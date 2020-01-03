import { Exercise } from "./exercise";

export class ExercisePromise1 extends Exercise {
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
`public run(doLog: (string) => void) {
  new Promise((resolve, reject) => {
    resolve(1);
    doLog(2);
    Promise.resolve().then(() => doLog(3));
  }).then(data => doLog(data));
}
`;
    this.solutionUrl = null;
    this.solution = `2
3
1
`;
  }

  public run(doLog: (string) => void) {
    new Promise((resolve, reject) => {
      resolve(1);
      doLog(2);
      Promise.resolve().then(() => doLog(3));
    }).then(data => doLog(data));
  }
}
