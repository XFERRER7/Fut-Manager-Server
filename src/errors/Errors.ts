

export class Errors extends Error {
  statusCode: number = 0;
  messageEx: string;

  constructor(name: string, message: string, messageEx: string) {
    super(message);
    this.name = name;
    if(this.name == "BadRequest") {
      this.statusCode = 400
    }
    else if(this.name == "InternalServerError") {
      this.statusCode = 500
    }
    else if(this.name == "Unauthorized") {
      this.statusCode = 401
    }
    this.messageEx = messageEx
  }
}