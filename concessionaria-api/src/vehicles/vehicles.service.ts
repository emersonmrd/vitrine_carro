import { Injectable } from '@nestjs/common';
import { VehicleDto } from '../common/dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  private vehicles: VehicleDto[] = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      price: 420000,
      image:
        'https://images.unsplash.com/photo-1615908397724-6dc711db34a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      brand: 'Mercedes-Benz',
      model: 'GLE 450',
      year: 2024,
      price: 580000,
      image:
        'https://images.unsplash.com/photo-1732427244178-bde7a633d09e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'Q7',
      year: 2023,
      price: 450000,
      image:
        'https://images.unsplash.com/photo-1590509278793-032529995158?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      brand: 'Porsche',
      model: 'Cayenne',
      year: 2024,
      price: 720000,
      image:
        'https://images.unsplash.com/photo-1654159866298-e3c8ee93e43b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      brand: 'Range Rover',
      model: 'Evoque',
      year: 2023,
      price: 380000,
      image:
        'https://images.unsplash.com/photo-1646654184457-cd64cadcd3a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      brand: 'Volvo',
      model: 'XC90',
      year: 2024,
      price: 520000,
      image:
        'https://images.unsplash.com/photo-1642336011721-9dd962c38fb4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  findAll(): VehicleDto[] {
    return this.vehicles;
  }

  findById(id: number): VehicleDto | undefined {
    return this.vehicles.find((v) => v.id === id);
  }

  findByBrand(brand: string): VehicleDto[] {
    return this.vehicles.filter((v) => v.brand === brand);
  }
}
