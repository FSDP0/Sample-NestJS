import { Injectable, Logger } from "@nestjs/common";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

import { CommentHttpService } from "@comment/comment-http.service";
import { CommentDto } from "@comment/dto/comment.dto";

@Injectable()
export class CommentService {
	private readonly logger = new Logger(CommentService.name);

	constructor(private readonly httpService: CommentHttpService) {}

	async getAllComment(): Promise<CommentDto[] | undefined> {
		const { data } = await firstValueFrom(
			this.httpService.get<CommentDto[]>("comments").pipe(
				catchError((error: AxiosError) => {
					this.logger.error(error.response.data);

					throw "Error Occured!";
				}),
			),
		);

		return data;
	}
}
