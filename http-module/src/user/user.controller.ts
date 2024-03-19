import { Controller, Get } from "@nestjs/common";

import { UserService } from "@user/user.service";
import { UserDto } from "@user/dto/user.dto";

@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	findAllUser(): Promise<UserDto[] | undefined> {
		return this.userService.getAllUser();
	}
}
