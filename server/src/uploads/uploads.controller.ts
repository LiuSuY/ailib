import { Controller, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {
  }

  @Public()
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}
