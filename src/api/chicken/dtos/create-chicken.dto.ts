import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateChickenDto {
    @ApiProperty({description: 'The name of the chicken'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: 'Birthday of the chicken'})
    @IsOptional()
    @IsDateString()
    birthday: Date;

    @ApiProperty({description: 'The weight of the chicken'})
    @IsNumber()
    @IsPositive()
    weight: number;
}