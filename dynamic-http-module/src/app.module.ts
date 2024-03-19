import { Module } from "@nestjs/common";
import { StoreModule } from "./store/store.module";
import { CommentModule } from "./comment/comment.module";

@Module({
	imports: [StoreModule, CommentModule],
})
export class AppModule {}
