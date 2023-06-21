import { Sequelize } from "sequelize-typescript";
import User from "./User";

const sequelize = new Sequelize({
  database: 'lear',
  username: '',
  password: '',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
})

User.initialize(sequelize);
export default sequelize
