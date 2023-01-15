// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessageDto';

@Controller('messages')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'All Messages';
  }

  @Post()
  createMessage(@Body() message: CreateMessageDto) {
    console.log(message);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
