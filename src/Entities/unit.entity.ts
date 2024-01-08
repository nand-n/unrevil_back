
import { Column,Entity} from "typeorm";
import { baseEntity } from "./BaseEntity";

@Entity('units')
export class rolesEntity extends baseEntity {

    @Column({ length: 500, type: "varchar" })
    nameEnglish: string;
    @Column({ length: 500, type: "varchar" })
    nameAmharic: string;
}