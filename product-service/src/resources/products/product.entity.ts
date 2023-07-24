import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Products {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:String,nullable:false,unique:true})
    product_title!:string;

    @Column({type:String,nullable:false})
    description!:string;

}