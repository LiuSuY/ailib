import { IsNotEmpty, IsString, Length } from 'class-validator'
export class signInDto {
    @IsNotEmpty()
    @IsString()
    @Length(11, 11, {})
    phone: string;

    @IsNotEmpty()
    @Length(4, 6, {})
    code: string
}