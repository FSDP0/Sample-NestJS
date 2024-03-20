import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "@user/user.service";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async signIn(userId: number, pwd: string): Promise<any> {
		const user = await this.userService.findByUserId(userId);

		if (user?.password !== pwd) {
			throw new UnauthorizedException();
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...result } = user;

		return result;
	}
}
