import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'lear',
  username: '',
  password: '',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
})
export default sequelize