import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'users'})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  number_phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  acess_level: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  site_id: number;
}

User.sync({force: false}).then(() => {})
