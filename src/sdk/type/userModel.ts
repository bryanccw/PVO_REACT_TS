export interface UserModel {
  name?: string;
  userName?: string;
  email?: string;
  branch?: string[];
  role?: string;
  password?: string;
  confirmPassword?: string;
  createdBy?: string;
  createdDate?: number;
  updatedBy?: string;
  updatedDate?: number;
  [key: string]: any;
}

export type UserLoginModel = {
  userName: string;
  password: string;
};

export type UserForgotPasswordModel = {
  userName: string;
  email: string;
};
