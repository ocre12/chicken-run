import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put} from '@nestjs/common';
import {ChickenService} from "./chicken.service";
import {CreateChickenDto} from "./dtos/create-chicken.dto";
import {UpdateChickenDto} from "./dtos/update-chicken.dto";
import {ReplaceChickenDto} from "./dtos/replace-chicken.dto";

@Controller('chicken')
export class ChickenController {
    constructor(private chickenService: ChickenService) {}

    @Get()
    async findAll() {
        return this.chickenService.findAllChicken();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.chickenService.findChickenById(id);
    }

    @Post()
    async create(@Body() createChickenDto: CreateChickenDto) {
        return this.chickenService.createChicken(createChickenDto);
    }

    @Patch('run/:id')
    async nextStep(@Param('id') id: string) {
        return this.chickenService.incrementStep(id);
    }

    @Patch(':id')
    async patchOne(@Param('id') id: string, @Body() updateChickenDto: UpdateChickenDto) {
        if (!id?.length) {
            throw new HttpException('Chicken id is missing', HttpStatus.BAD_REQUEST);
        }
        try {
            const chicken = await this.chickenService.updateChicken(id, updateChickenDto);
            return chicken;
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() replaceChickenDto: ReplaceChickenDto) {
        if (!id?.length) {
            throw new HttpException('Chicken id is missing', HttpStatus.BAD_REQUEST);
        }
        return this.chickenService.replaceChicken(id, replaceChickenDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        if (!id?.length) {
            throw new HttpException('Chicken id is missing', HttpStatus.BAD_REQUEST);
        }
        return this.chickenService.deleteChicken(id);
    }
}
