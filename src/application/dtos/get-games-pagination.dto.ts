import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetGamesPaginationDTO {
  @IsOptional()
  @IsNumberString()
  page?: number;

  @IsOptional()
  @IsNumberString()
  pageSize?: number;

  @IsOptional()
  @IsIn(['desc', 'asc'])
  sort?: 'desc' | 'asc';

  @IsOptional()
  @IsString()
  search?: string;
}
