import {IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ReplaceChickenDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    birthday: Date;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    weight: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    steps: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isRunning: boolean;
}