import { Injectable } from '@nestjs/common';
import { Restaurant } from './resturant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-resturant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  create(restaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantRepository.create(restaurantDto);
    return this.restaurantRepository.save(restaurant);
  }
}
