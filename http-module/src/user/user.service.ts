import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";

import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

import { UserDto } from "@user/dto/user.dto";

@Injectable()
export class UserService {
	private readonly logger = new Logger(UserService.name);

	constructor(private readonly httpService: HttpService) {}

	async getAllUser(): Promise<UserDto[] | undefined> {
		const { data } = await firstValueFrom(
			this.httpService.get<UserDto[]>("users").pipe(
				catchError((error: AxiosError) => {
					this.logger.error(error.response.data);

					throw "Error Occured!";
				}),
			),
		);

		return data;
	}
}
