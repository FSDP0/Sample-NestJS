import { HttpModule, HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { StoreHttpService } from "@store/common/store-http.service";

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000,
			maxRedirects: 2,
			baseURL: "https://fakestoreapi.com",
		}),
	],
	providers: [
		{
			provide: StoreHttpService,
			useExisting: HttpService,
		},
	],
	exports: [StoreHttpService],
})
export class StoreHttpModule {}
