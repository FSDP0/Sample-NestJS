import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { UserController } from "@user/user.controller";
import { UserService } from "@user/user.service";

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 2,
			baseURL: "https://fakestoreapi.com",
		}),
	],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
