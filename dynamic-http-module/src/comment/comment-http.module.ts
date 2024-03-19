import { HttpModule, HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { CommentHttpService } from "./comment-http.service";

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 2,
			baseURL: "https://jsonplaceholder.typicode.com",
		}),
	],
	providers: [
		{
			provide: CommentHttpService,
			useExisting: HttpService,
		},
	],
	exports: [CommentHttpService],
})
export class CommentHttpModule {}
