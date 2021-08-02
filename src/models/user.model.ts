import { IsString, IsNumber, IsEmail } from "class-validator";

export enum IGrant {
  ADMIN = 1,
  USER = 100,
  //STUDENT = 2,
}

export class UserModel {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsNumber()
  grant: IGrant;
}
