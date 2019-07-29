import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('groceries')
export class GroceryList extends BaseEntity{
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column({
        type: 'text',
        unique: true,
    })
    name: string;

    @CreateDateColumn({
        type: 'timestamp'
    })
    created: string;
    
}