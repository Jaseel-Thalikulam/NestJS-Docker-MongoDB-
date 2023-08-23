import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CarModule, MongooseModule.forRoot('mongodb+srv://jaseelta111:mvW6wA1yX7WhnhPY@cluster0.swxijv6.mongodb.net/car_manager')],
  
 
})
export class AppModule {}
