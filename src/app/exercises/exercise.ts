export const lf = '\n';

export abstract class Exercise {
  public name: string;
  public info: string;
  public infoUrl: string;
  public infoUrlName: string;
  public code: string;
  public solution: string;
  public solutionUrl: string;
  protected doLog: (string) => void;

  public abstract run(doLog: (string) => void);
}