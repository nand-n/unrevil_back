
import { Column,Entity} from "typeorm";
import { baseEntity } from "./BaseEntity";

@Entity('brands')
export class rolesEntity extends baseEntity {

    @Column({ length: 500, type: "varchar" })
    nameEnglish: string;
    @Column({ length: 500, type: "varchar" })
    nameAmharic: string;
    @Column()
    brand_image:string

}