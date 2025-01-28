import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Table name in the database
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
