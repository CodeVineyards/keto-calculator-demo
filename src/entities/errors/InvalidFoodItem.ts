export class InvalidFoodItem extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidFoodItem';
  }
}
