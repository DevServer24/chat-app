import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user1Id: string;

  @Column()
  user2Id: string;

  @ManyToOne(() => User, (user) => user.friends1)
  user1: User;

  @ManyToOne(() => User, (user) => user.friends2)
  user2: User;
}
