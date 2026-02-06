import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { BrandsModule } from './brands/brands.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [VehiclesModule, BrandsModule, ShowcaseModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
