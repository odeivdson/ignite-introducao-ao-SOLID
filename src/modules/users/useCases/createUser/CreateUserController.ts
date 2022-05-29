import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { email, name } = request.body;

      const userCreated = this.createUserUseCase.execute({email, name});

      return response.status(201).send(userCreated);
    } catch(error) {
      return response.status(400).send({error: 'User already exists'});
    }
  }
}

export { CreateUserController };
