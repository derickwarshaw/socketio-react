export interface IUser {
  login: string;
}

export class User implements IUser {
  public login: string;

  constructor(login: string) {
    this.login = login;
  }
}
