export interface IBaseUser {
  login: string;
}

// tslint:disable-next-line: no-empty-interface
export interface IUser extends IBaseUser {}
export interface IAdmin extends IBaseUser {
  status: string;
}


export class User implements IUser {
  public login: string;

  constructor(login: string = 'Unknown') {
    this.login = login;
  }
}

export class Admin implements IAdmin {
  public login: string;
  public status: string;

  constructor(login: string = 'Unknown', status: string = 'Unknown') {
    this.login = login;
    this.status = status;
  }
}
