import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ChickenModule} from "./api/chicken/chicken.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017', {
          auth: {
              username: 'root',
              password: 'root',
          },
          dbName: 'chicken-run',
          retryWrites: true,
          w: "majority",
      }),
      ChickenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
