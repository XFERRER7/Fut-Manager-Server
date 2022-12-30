

export class InternalServerError extends Error {
  
  statusCode: number;
  messageEx: string;

  constructor(message: string, messageEx: string) {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = 500
    this.messageEx = messageEx
  }
}