import { Request, Response } from 'express';
import UserModel from "../models/UserModel";
import UserEntity from "../types/UserEntity";

class UserController {

  public async createUser(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      number_phone,
      password,
      access_level,
      site_id
    } = req.body as UserEntity

    const foundEmail = await UserModel.findByEmail(email);

    if (foundEmail) res.status(500).json(`Email ${email} já cadastrado`);

    const user = {
      ...req.body
    }

    if(!user.name || !user.email || !user.password || 
        !user.number_phone || !user.access_level || !user.site_id) 
      res.status(201).json({ message: `Campos vázios`}) ;

    await UserModel.save(user);

    return res.status(201).json({ message: `Usuário criado com sucesso`}) ;
  } 
}

export default new UserController()