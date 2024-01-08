
import { Column,Entity} from "typeorm";
import { baseEntity } from "./BaseEntity";

@Entity('sub-categories')
export class rolesEntity extends baseEntity {

    @Column({ length: 500, type: "varchar" })
    nameEnglish: string;
    @Column({ length: 500, type: "varchar" })
    nameAmharic: string;
    @Column()
    category_id:string

}