import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } =  request.headers
      const users = this.listAllUsersUseCase.execute({ user_id } as IRequest);

      return response.status(200).send(users);
    } catch(error) {
      return response.status(400).send({error: 'Oops, list user is not allowed'});
    }
  }
}

export { ListAllUsersController };
