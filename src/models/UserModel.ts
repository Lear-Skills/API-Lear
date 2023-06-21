import User from "../db/User";
import UserEntity from "../types/UserEntity";

class UserModel {
  async save(data: UserEntity){
    const user = await User.create(data);
    return user;
  }
  
  async findByEmail(email: string) {
    const hasEmailFound = await User.findOne({
      where: { email: email}
    })

   return hasEmailFound 
  }
}
export default new UserModel()