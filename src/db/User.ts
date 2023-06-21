import UserEntity from "../types/UserEntity";

import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model<UserEntity> {
  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        number_phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        access_level: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        site_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Users'
      }
    );
  }
}

export default User;

