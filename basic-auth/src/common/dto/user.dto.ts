import { PickType } from "@nestjs/mapped-types";
import { IUser } from "../interfaces/IUser";

export class UserDto implements IUser {
	userId: number;
	username: string;
	password: string;
}

export class LoginUserDto extends PickType(UserDto, [
	"userId",
	"password",
] as const) {}
