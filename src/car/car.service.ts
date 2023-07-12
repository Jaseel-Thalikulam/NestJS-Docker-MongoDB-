import { HttpException, Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose' 
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';


@Injectable()
export class CarService {

    constructor(@InjectModel('Car') private readonly carModel:Model<ICar>){   }

    public  getCar( ):Promise<CarDto[]> {
        const cars = this.carModel.find().exec();
        if (!cars || cars[0]) {
            throw new HttpException("Not Found",404)
        }
        return cars
    }


    public async  postCar(newcar :CarDto) {
        const car = await new this.carModel(newcar)
        return car.save()
    }

    public  getCarbyId(id:ObjectId):Promise<CarDto> {
        const car = this.carModel.findOne({_id:id
        }).exec();
        if (!car) {
            throw new HttpException("Not Found",404)
        }
        return car
    }


    public async  deleteCarbyId(id:number):Promise <object> {
        const car = this.carModel.deleteOne({id}).exec();
        if ((await car).deletedCount === 0){
            throw new HttpException("Not Found",404)
        }
        return car
    }
    
    

    public async  putCarbyId(id:number,propertyName:string,propertyValue:string) {
        const car = await this.carModel.findOneAndUpdate({ id }, {
            [propertyName] : propertyValue
        }).exec();
        if (!car) {
            throw new HttpException("not found",404)
        }
       
        return car
    }
}
