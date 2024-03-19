import { Controller, Get } from "@nestjs/common";

import { CommentService } from "@comment/comment.service";
import { CommentDto } from "@comment/dto/comment.dto";

@Controller("comments")
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Get()
	findAllComment(): Promise<CommentDto[] | undefined> {
		return this.commentService.getAllComment();
	}
}
