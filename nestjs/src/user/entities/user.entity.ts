import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') // Automatically generates a UUID
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string; // Store hashed password

  @Column({ type: 'varchar', length: 255, nullable: true })
  image?: string;

  @Column({ type: 'timestamp', nullable: true })
  emailVerified?: Date;
}
