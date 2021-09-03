import { User } from "src/users/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Poop {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({nullable: false})
    ts: Date;

    @Column({nullable: false})
    type: number;

    @Column({ nullable: false })
    userId: string;

    @ManyToOne(() => User, { eager: false })
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    createdBy: User;
}