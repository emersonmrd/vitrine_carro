import { VehicleDto } from './vehicle.dto';

export class ShowcaseDto {
  company!: string;
  slogan!: string;
  description!: string;
  highlights!: VehicleDto[];
}
