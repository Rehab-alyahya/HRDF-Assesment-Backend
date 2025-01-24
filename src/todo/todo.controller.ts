import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.todoService.findeOne(id);
  }

  @Post()
  async createUser(@Body() newTodo: CreateTodoDto) {
    return this.todoService.create(newTodo);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string) {
    return this.todoService.remove(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todoService.update(id, body);
  }
}
