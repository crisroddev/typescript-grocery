import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
  import { Item } from './Item';
  
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

    @ManyToOne(type => Item, { cascade: true})
    @JoinColumn()
    items: Item[];
  
  }