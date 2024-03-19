import { Module } from "@nestjs/common";

import { StoreHttpModule } from "@store/common/store-http.module";

import { CartController } from "@cart/cart.controller";
import { CartService } from "@cart/cart.service";

@Module({
	imports: [StoreHttpModule],
	controllers: [CartController],
	providers: [CartService],
})
export class CartModule {}
