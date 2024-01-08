
import { Column,Entity, OneToMany} from "typeorm";
import { baseEntity } from "./BaseEntity";
import { productEntity } from "./product.entity";

@Entity('tags')
export class tagEntity extends baseEntity {

    @Column({ length: 500, type: "varchar" })
    nameEnglish: string;
    @Column({ length: 500, type: "varchar" })
    nameAmharic: string;

    @OneToMany(() => productEntity, (user) => user.catagories)
    products: productEntity[]
}