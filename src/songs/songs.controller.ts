import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { SongsService } from './songs.service.js';
import { CreateSongsDTO } from './dto/create-songs-dto.js';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Get Song';
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
