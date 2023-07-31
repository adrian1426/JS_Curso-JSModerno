export class TodoModel {

  constructor(description) {
    this.id = 1;
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }

}