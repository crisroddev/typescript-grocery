import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    
  } from 'typeorm';

  
  @Entity('items')
  export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
  
    @Column({
      type: 'text',
    })
    name: string;
  
    @CreateDateColumn({
      type: 'timestamp'
    })
    created: string;
    
  }