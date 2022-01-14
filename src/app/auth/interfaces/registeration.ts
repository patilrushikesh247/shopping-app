export interface IRegistrationParam {
  User_ID?: string;
  UserName: string;
  UserEmail: string;
  UserPassword: string;
  UserDOB: string;
  UserMobile: string;
  UserRole: number;
}

export interface IRegistrationRes {
  Data: null;
  ErrorCode: number;
  Message: string;
  Status: boolean;
}
