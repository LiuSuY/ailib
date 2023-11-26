import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs'

@Injectable()
export class FileService {
    constructor(private prisma: PrismaService) {

    }

    async initList() {
        // 清空所有数据
        await this.prisma.fileList.deleteMany({});
        const data = await fs.readdirSync('./images')
        let list = [];
        data.forEach((item, index) => {
            list.push({ id: index, url: `http://127.0.0.1:3000/images/${item}`, title: 'test' + index })
        })

        return this.prisma.fileList.createMany({ data: list })
        list.map(async (item) => {
            await this.prisma.$queryRaw(
                Prisma.sql`insert into filelist(id,url,title) values (${item.id}, ${item.url}, ${item.title})`
            )
        })
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
