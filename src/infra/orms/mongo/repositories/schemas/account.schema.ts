import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class AccountSchema{
 @ObjectIdColumn({ type: 'uuid', nullable: false })
 id: ObjectID;

 @Column({ nullable: false })
 agency: number;

 @Column({ nullable: false })
 account: number;

 @Column({ nullable: false })
 name: string;

 @Column({ nullable: false })
 balance: number;
 };
