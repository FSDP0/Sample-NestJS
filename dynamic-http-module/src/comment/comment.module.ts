import { Module } from "@nestjs/common";

import { CommentService } from "@comment/comment.service";
import { CommentController } from "@comment/comment.controller";
import { CommentHttpModule } from "@comment/comment-http.module";

@Module({
	imports: [CommentHttpModule],
	controllers: [CommentController],
	providers: [CommentService],
})
export class CommentModule {}
