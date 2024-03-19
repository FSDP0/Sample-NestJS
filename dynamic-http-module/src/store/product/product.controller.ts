import { Controller, Get } from "@nestjs/common";

import { ProductService } from "@product/product.service";
import { ProductDto } from "@product/dto/product.dto";

@Controller("products")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	findAllProduct(): Promise<ProductDto[] | undefined> {
		return this.productService.getAllProduct();
	}
}
