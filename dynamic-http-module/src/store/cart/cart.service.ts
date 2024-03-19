import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

import { StoreHttpService } from "@store/common/store-http.service";

import { CartDto } from "@cart/dto/cart.dto";

@Injectable()
export class CartService {
	private readonly logger = new Logger(CartService.name);

	constructor(private readonly httpService: StoreHttpService) {}

	async getAllCart(): Promise<CartDto[] | undefined> {
		const { data } = await firstValueFrom(
			this.httpService.get<CartDto[]>("carts").pipe(
				catchError((error: AxiosError) => {
					this.logger.error(error.response.data);

					throw "Error Occrued!";
				}),
			),
		);

		return data;
	}
}
