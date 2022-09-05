import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'content' })
export class ContentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
