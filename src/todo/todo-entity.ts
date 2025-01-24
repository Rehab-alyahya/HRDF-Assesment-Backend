import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos') // Table name in the database
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  todo: string;

  @Column()
  complated: boolean;
}
