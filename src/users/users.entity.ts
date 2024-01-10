import { Role } from 'src/auth/roles/role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({nullable: true})
  roles?: Role;

  @Column()
  email: string;

  @Column()
  password: string;
}
