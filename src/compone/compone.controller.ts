import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ComponeService } from './compone.service';
import { CreateComponeDto } from './dto/create-compone.dto';
import { UpdateComponeDto } from './dto/update-compone.dto';

@Controller('compone')
export class ComponeController {
  constructor(private readonly componeService: ComponeService) {}

  @Post()
  create(@Body() createComponeDto: CreateComponeDto) {
    return this.componeService.create(createComponeDto);
  }

  @Get()
  findAll() {
    return this.componeService.findAll();
  }
  
  @Put()
  upAll() {
    return this.componeService.upAll();
  }
  
  @Delete()
  delAll() {
    return this.componeService.delAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponeDto: UpdateComponeDto) {
    return this.componeService.update(+id, updateComponeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componeService.remove(+id);
  }
}
