import { Controller, Get, Res } from '@nestjs/common';
import { FileService } from './file.service';
; import { Public } from 'src/auth/decorators/public.decorator';
import * as fs from 'fs'
import { hostname } from 'os';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {

  }

  @Public()
  @Get('/list')
  async list() {
    try {
      const data = await fs.readdirSync('./images')
      let list = [];
      data.forEach((item) => {
        list.push({ url: `http://${hostname}:3000/images/${item}`})
      })
      return list;
    } catch (error) {
      return error;
    }

  }
}
