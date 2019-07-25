export class UserValidator {
  /**
   * Create new instance of UserValidator or return created one.
   */
  public static getInstance() {
    if (!UserValidator.instance) {
      UserValidator.instance = new UserValidator();
    }

    return UserValidator.instance;
  }

  private static instance: UserValidator;

  private constructor() {}

  public isvalidLogin(login: string): boolean {
    const proccesLogin = login.trim();
    const regex = /^[A-Za-z0-9]*$/;

    if (regex.test(proccesLogin)) {
      return true;
    }

    return false;
  }

  public isvalidPassword(password: string): boolean {
    return password.trim().length > 6;
  }
}
