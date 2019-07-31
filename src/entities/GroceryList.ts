import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('groceries')
  export class GroceryList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
  
    @Column({
      type: 'text',
      unique: true
    })
    name: string;
  
    @CreateDateColumn({
      type: 'timestamp'
    })
    created: string;
    
  }