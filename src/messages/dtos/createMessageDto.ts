// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
