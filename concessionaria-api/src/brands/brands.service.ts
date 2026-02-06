import { Injectable } from '@nestjs/common';

export interface Brand {
  name: string;
  logo: string;
}

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    { name: 'BMW', logo: 'https://via.placeholder.com/100x100?text=BMW' },
    {
      name: 'Mercedes-Benz',
      logo: 'https://via.placeholder.com/100x100?text=MB',
    },
    { name: 'Audi', logo: 'https://via.placeholder.com/100x100?text=Audi' },
    {
      name: 'Porsche',
      logo: 'https://via.placeholder.com/100x100?text=Porsche',
    },
    {
      name: 'Range Rover',
      logo: 'https://via.placeholder.com/100x100?text=RR',
    },
    { name: 'Volvo', logo: 'https://via.placeholder.com/100x100?text=Volvo' },
  ];

  findAll(): Brand[] {
    return this.brands;
  }
}
