import { Controller, Get, ParseIntPipe, Query, Res } from '@nestjs/common';
import { FileService } from './file.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {

  }

  @Public()
  @Get('initList')
  async initList(){
    return this.fileService.initList();
  }

  @Public()
  @Get('/list')
  async list(@Query('current', ParseIntPipe) current,
    @Query('size', ParseIntPipe) size,
  ) {
    return this.fileService.findAll(current,size)
  }
}
