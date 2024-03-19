import { Module } from "@nestjs/common";

import { StoreHttpModule } from "@store/common/store-http.module";

import { ProductController } from "@product/product.controller";
import { ProductService } from "@product/product.service";

@Module({
	imports: [StoreHttpModule],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
