import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-songs-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Get Song based on the ${typeof id}`;
  }

  @Post()
  create(@Body() createSongsDTO: CreateSongsDTO) {
    return this.songService.create(createSongsDTO);
  }

  @Put(':id')
  edit() {
    return 'Edit Song';
  }

  @Delete(':id')
  delete() {
    return 'Delete Song';
  }
}
