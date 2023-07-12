import { Controller, Get,Delete,Put,Post,Body,Param,Query } from '@nestjs/common';
import { CarService } from './car.service';
import   {CarDto} from './car.dto'
import { ObjectId } from 'mongoose';
@Controller('car')
export class CarController {
    constructor(private carservice: CarService) { }
    
    @Get()
    async getCar() {
      return this.carservice.getCar()
    }

    @Post()
    async postCar(@Body() car:CarDto) {
        return this.carservice.postCar(car)
        }


    @Get(':id')
    async getCarbyId(@Param('id')id:ObjectId) {
        return this.carservice.getCarbyId(id)
    }

    @Delete(':id')
    async deleteCarbyId(@Param('id')id: number) {
        return this.carservice.deleteCarbyId(id)
    }
    @Put(':id')
    async putCarbyId(@Param('id') id: number, @Query() query) {
        const propertyName =query.property_name
        const propertyValue=query.property_value
        return this.carservice.putCarbyId(id,propertyName,propertyValue)
    }


}
