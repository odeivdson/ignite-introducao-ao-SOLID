import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } =  request.params
      const user = this.turnUserAdminUseCase.execute({user_id});
      
      if (!user) {
        return response.status(400).send({error: 'User is not exists.'})
      }

      return response.status(200).send(user);
    } catch(error) {
      return response.status(404).send({error: error.message});
    }
  }
}

export { TurnUserAdminController };
