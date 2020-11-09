import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class DepositSchema extends BaseEntity{
 @ObjectIdColumn({ type: 'uuid', nullable: false })
 id: ObjectID;

 @Column({ nullable: false, precision:2 })
 toAgency: number;

 @Column({ nullable: false, precision:2 })
 toAccount: number;

 @Column({ nullable: false, precision: 2 })
 depositValue: number;
}