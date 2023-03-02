import { Module } from '@nestjs/common';
import { ChickenService } from './chicken.service';
import { ChickenController } from './chicken.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Chicken, ChickenSchema} from "../../model/chicken.schema";

@Module({
  imports: [
      MongooseModule.forFeatureAsync([
        {
          name: Chicken.name,
          useFactory: () => ChickenSchema,
        }
      ]),
  ],
  providers: [ChickenService],
  controllers: [ChickenController]
})
export class ChickenModule {}
