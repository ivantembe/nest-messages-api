import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'All Messages';
  }

  @Post()
  createMessage() {
    return 'Create new Message';
  }

  @Get('/:id')
  getMessage() {}
}
