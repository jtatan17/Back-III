// src/dto/PetDTO.js
export default class PetDTO {
  constructor(pet) {
    this.id = pet._id;
    this.name = pet.name;
    this.specie = pet.specie;
    this.birthDate = pet.birthDate;
    this.adopted = pet.adopted;
    this.image = pet.image;
    this.owner = pet.owner ?? null;
  }
}
