/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  todo: string;

  complated: boolean;
}
