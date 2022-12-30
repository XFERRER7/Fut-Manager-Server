

export class BadRequest extends Error {
  
  statusCode: number;
  messageEx: string;

  constructor(message: string, messageEx: string) {
    super(message);
    this.name = 'BadRequest';
    this.statusCode = 400
    this.messageEx = messageEx
  }
}