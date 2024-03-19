import { Controller, Get } from "@nestjs/common";

import { CartService } from "@cart/cart.service";
import { CartDto } from "@cart/dto/cart.dto";

@Controller("carts")
export class CartController {
	constructor(private readonly cartService: CartService) {}

	@Get()
	findAllCart(): Promise<CartDto[] | undefined> {
		return this.cartService.getAllCart();
	}
}
