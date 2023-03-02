import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Chicken, ChickenDocument} from "../../model/chicken.schema";
import {Model, Schema} from "mongoose";
import {CreateChickenDto} from "./dtos/create-chicken.dto";
import {UpdateChickenDto} from "./dtos/update-chicken.dto";
import {ReplaceChickenDto} from "./dtos/replace-chicken.dto";

@Injectable()
export class ChickenService {
    constructor(
        @InjectModel(Chicken.name)
        private chickenModel: Model<ChickenDocument>,
    ) {}

    async findAllChicken(): Promise<Chicken[]> {
        return this.chickenModel.find().exec();
    }

    async findChickenById(id: string): Promise<Chicken> {
        return this.chickenModel.findById(id).exec();
    }

    async createChicken(chickenDto: CreateChickenDto): Promise<Chicken> {
        const chicken = new this.chickenModel(chickenDto);

        return chicken.save();
    }

    async updateChicken(id: string, chickenDto: UpdateChickenDto): Promise<Chicken> {
        return this.chickenModel.findByIdAndUpdate(id, chickenDto, { new: true });
    }

    async replaceChicken(id: string, chickenDto: ReplaceChickenDto): Promise<Chicken> {
        return this.chickenModel.findOneAndReplace({_id: id}, chickenDto, {new: true});
    }

    async deleteChicken(id: string): Promise<Chicken> {
        return this.chickenModel.findByIdAndDelete(id).exec();
    }

    async incrementStep(id: string): Promise<Chicken> {
        return this.chickenModel.findByIdAndUpdate(id, {$inc: {steps: 1}}, {new: true}).exec();
    }
}
