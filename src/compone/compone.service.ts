import { Injectable } from '@nestjs/common';
import { CreateComponeDto } from './dto/create-compone.dto';
import { UpdateComponeDto } from './dto/update-compone.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ComponeService {
  constructor(private dataSource: DataSource) {}

  async create(createComponeDto: CreateComponeDto) {
    return await this.dataSource.query('INSERT INTO market()')
    // return 'This action adds a new compone';
  }

  async findAll() {
    return await this.dataSource.query('select * from market')
    // return `This action returns all compone`;
  }
  async upAll() {
    return await this.dataSource.query('UPDATE market SET Username="priya" where id=11')
    // return `This action returns all compone`;
  }
  async delAll() {
    return await this.dataSource.query('Delete from market WHERE id=9')
    // return `This action returns all compone`;  
  }

  findOne(id: number) {
    return `This action returns a #${id} compone`;
  }

  update(id: number, updateComponeDto: UpdateComponeDto) {
    return `This action updates a #${id} compone`;
  }

  remove(id: number) {
    return `This action removes a #${id} compone`;
  }
 
}
