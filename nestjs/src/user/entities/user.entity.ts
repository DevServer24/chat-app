import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Friendship } from '../../friendship/entities/friendship.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Friendship, (friendship) => friendship.user1)
  friends1: Friendship[];

  @OneToMany(() => Friendship, (friendship) => friendship.user2)
  friends2: Friendship[];
}
