import { Injectable, Logger } from "@nestjs/common";

import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

import { StoreHttpService } from "@store/common/store-http.service";

import { ProductDto } from "@product/dto/product.dto";

@Injectable()
export class ProductService {
	private readonly logger = new Logger(ProductService.name);

	constructor(private readonly httpService: StoreHttpService) {}

	async getAllProduct(): Promise<ProductDto[] | undefined> {
		const { data } = await firstValueFrom(
			this.httpService.get<ProductDto[]>("products").pipe(
				catchError((error: AxiosError) => {
					this.logger.error(error.response.data);

					throw "Error Occured!";
				}),
			),
		);

		return data;
	}
}
