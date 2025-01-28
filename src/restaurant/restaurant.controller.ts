import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-resturant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Get()
  async getAllRestaurants() {
    return this.restaurantService.findAll();
  }
  @Post()
  async createRestaurant(@Body() newRestaurant: CreateRestaurantDto) {
    return this.restaurantService.create(newRestaurant);
  }
}
