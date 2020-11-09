import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class AccountSchema extends BaseEntity{
 @ObjectIdColumn({ type: 'uuid', nullable: false })
 id: ObjectID;

 @Column({ nullable: false })
 agency: number;

 @Column({ nullable: false })
 account: number;

 @Column({ nullable: false })
 name: string;

 @Column({ nullable: false, precision:2 })
 balance: number;
 };
