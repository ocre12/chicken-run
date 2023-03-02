import {PartialType} from "@nestjs/mapped-types";
import {CreateChickenDto} from "./create-chicken.dto";
import {IsBoolean, IsNumber, IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateChickenDto extends PartialType(CreateChickenDto) {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    steps: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isRunning: boolean;
}