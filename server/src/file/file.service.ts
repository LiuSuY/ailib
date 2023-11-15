import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FileService {
    constructor(private prisma: PrismaService) {

    }

    async findAll(current: number, size: number) {

        const skip = (current - 1) * size;
        const data = await this.prisma.fileList.findMany({
            skip,
            take: size
        }) 
        const count = await this.prisma.fileList.count();
        return {
            data: data,
            size,
            current,
            total: count
        };

    }
}
