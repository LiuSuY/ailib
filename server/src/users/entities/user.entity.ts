import { ApiProperty } from "@nestjs/swagger";


export class User {


    @ApiProperty({
        example: '',
        description: '用户名'
    })
    phone: string;

    @ApiProperty({
        example: '',
        description: '验证码',
    })
    code: string;
}