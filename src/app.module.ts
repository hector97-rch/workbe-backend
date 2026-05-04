import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? "mongodb://127.0.0.1:27017/mydb",
    ),
  ],
  controllers: [AppController],
})
export class AppModule {}
