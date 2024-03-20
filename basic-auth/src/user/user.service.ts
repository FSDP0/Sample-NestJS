import { Injectable } from "@nestjs/common";
import { UserDto } from "@common/dto/user.dto";

@Injectable()
export class UserService {
	private readonly users: UserDto[] = [
		{
			userId: 1,
			username: "Petter",
			password: "password1",
		},
		{
			userId: 2,
			username: "Maria",
			password: "password2",
		},
	];

	async findByUserId(userId: number): Promise<UserDto | undefined> {
		return this.users.find((user) => user.userId == userId);
	}
}
