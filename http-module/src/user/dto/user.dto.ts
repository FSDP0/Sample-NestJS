export interface IName {
	firstname: string;
	lastname: string;
}

export interface IAddress {
	city: string;
	street: string;
	number: number;
	zipcode: string;
	geolocation: {
		lat: string;
		long: string;
	};
}

export class UserDto {
	id: number;
	email: string;
	username: string;
	password: string;
	name: IName;
	address: IAddress;
	phone: string;
}
