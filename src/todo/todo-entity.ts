import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('todos') // Table name in the database
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  todo: string;

  @Column({ default: false })
  complated: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
