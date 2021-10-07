import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

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

    @Index()
    @Column({ nullable: false })
    userEmail: string;
}