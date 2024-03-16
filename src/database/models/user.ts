import { Model, Column, Table, CreatedAt, UpdatedAt, DataType, HasMany } from "sequelize-typescript";

@Table({
  tableName: 'users'
})
export class User extends Model<User> {

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.STRING)
  email!: string

  @Column(DataType.STRING)
  password!: string

  @Column(DataType.INTEGER)
  master_user_group_id!: number

  @Column(DataType.INTEGER)
  company_id!: number

  @Column
  title!: string

  @Column
  is_invite!: boolean

  @Column
  status!: number

  @Column
  password_is_confirm!: number

  @Column
  is_send_mail!: number

  @Column
  created_by!: number

  @Column
  email_confirmation_code!: string

  @Column
  password_confirmation_code!: string

  @Column
  new_email!: string

  @Column
  last_login_at!: Date

  @Column
  time_zone!: string

  @Column
  deleted_at!: Date

  @Column
  last_name!: string

  @Column
  phone_number!: string

  @Column
  is_verified_email!: boolean

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}