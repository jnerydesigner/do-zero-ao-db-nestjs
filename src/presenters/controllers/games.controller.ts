import { GetGamesPaginationDTO } from '@application/dtos/get-games-pagination.dto';
import { GetGamesUseCase } from '@application/use-case/get-games.use-case';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('games')
export class GamesController {
  constructor(private readonly getGamesUseCase: GetGamesUseCase) {}

  @Get()
  async findAll(@Query() input: GetGamesPaginationDTO) {
    return this.getGamesUseCase.execute({
      page: input.page,
      pageSize: input.pageSize,
      sort: input.sort,
      search: input.search,
    });
  }
}
