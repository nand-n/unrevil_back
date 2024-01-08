
import { BaseEntity, Column, CreateDateColumn, Timestamp, Entity, PrimaryColumn, BeforeInsert, OneToMany, ManyToOne, OneToOne, ManyToMany, JoinTable, Double, JoinColumn } from "typeorm";
import * as uuid from "uuid"
import { baseEntity } from "./BaseEntity";
import { usersEntity } from "./users.entity";
import { permissionsEntity } from "./permission.entity";
import { categoryEntity } from "./category.entity";
import { cartEntity } from "./cart.entity";
import { OrderEntity } from "./order.entity";
import { tagEntity } from "./tag.entity";


@Entity('products')
export class productEntity extends baseEntity {


    @Column({ length: 500, type: "varchar" })
    titleAmharic: string;
    @Column({ length: 500, type: "varchar" })
    titleEnglish: string;
    @Column({ length: 500, type: "varchar" })
    variant_type: string;


    @Column({ length: 500, type: "varchar" })
    descriptionAmharic: string;
    @Column({ length: 500, type: "varchar" })
    descriptionEnglish: string;


    @Column({ length: 500, type: "varchar" })
    unit_id: string;
    @Column({ length: 500, type: "varchar" })
    sub_category_id: string;

    @Column({ length: 500, type: "varchar" })
    brand_id: string;

    @Column({ nullable: true })
    categoryId: string;

    @Column()
    thumbnail: string;
    @Column({ nullable: true })
    ratting: number;

    @Column({ nullable: true })
    userId: string;
    @Column({ nullable: true })
    updatedBy: string;

    @ManyToOne(() => tagEntity, (tag) => tag.products)
    @JoinColumn({
        name: 'tagId',
        referencedColumnName: 'id',
    },
    )
    catagories: categoryEntity


    @ManyToMany(() => cartEntity)
    @JoinTable({
        name: 'cartProducts', // Use a unique name for this pivot table
        joinColumn: {
            name: 'productId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'cartId',
            referencedColumnName: 'id',
        },
    })
    carts: cartEntity[];

    @ManyToOne(() => usersEntity, (user) => user.products)
    user: usersEntity




    @ManyToMany(() => OrderEntity)
    @JoinTable({
        name: 'productorders', // Use a unique name for this pivot table
        joinColumn: {
            name: 'productId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'orderId',
            referencedColumnName: 'id',
        },
    })
    orders: OrderEntity[];





}




