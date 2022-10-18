import { PartialType } from '@nestjs/mapped-types';
import { CreateComponeDto } from './create-compone.dto';

export class UpdateComponeDto extends PartialType(CreateComponeDto) {}
