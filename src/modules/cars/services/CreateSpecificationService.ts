import { SpecificationRepository } from "../repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) { }

  execute({ name, description }: IRequest) {
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService }