// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'All Messages';
  }

  @Post()
  createMessage(@Body() message: any) {
    console.log(message);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
