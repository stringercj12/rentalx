import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {

  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createSpecificationUseCase.execute({ name, description });

      return response.status(201).send();
    } catch (error) {

      return response.status(400).json({ error });
    }
  }
}

export { CreateSpecificationController }