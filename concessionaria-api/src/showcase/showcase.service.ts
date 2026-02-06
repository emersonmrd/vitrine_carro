import { Injectable } from '@nestjs/common';
import { ShowcaseDto } from '../common/dto/showcase.dto';
import { VehiclesService } from '../vehicles/vehicles.service';

@Injectable()
export class ShowcaseService {
  constructor(private vehiclesService: VehiclesService) {}

  getHome(): ShowcaseDto {
    const allVehicles = this.vehiclesService.findAll();

    return {
      company: 'Motor Show',
      slogan: 'Seu próximo carro começa aqui',
      description:
        'A Motor Show é uma concessionária fictícia especializada em veículos seminovos e premium, oferecendo qualidade, procedência e confiança.',
      highlights: allVehicles.slice(0, 6),
    };
  }
}
