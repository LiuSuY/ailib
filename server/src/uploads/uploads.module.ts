import { Module, Global } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Global()
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: diskStorage({
            destination: "images",
            filename: (_, file, callback) => {
              const path = file.originalname
              callback(null, path)
            }
          })
        }
      }
    })
  ],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule { }
