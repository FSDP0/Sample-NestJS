export interface IProduct {
	productId: number;
	quantity: number;
}

export class CartDto {
	id: number;
	userId: number;
	date: Date;
	products: IProduct[];
}
