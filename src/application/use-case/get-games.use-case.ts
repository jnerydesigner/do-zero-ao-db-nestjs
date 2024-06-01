import { GetGamesPaginationDTO } from '@application/dtos/get-games-pagination.dto';
import { GamesRepositoryInterface } from '@infra/database/postgres/interface/games-repository.interface';
import { Inject } from '@nestjs/common';

export class GetGamesUseCase {
  constructor(
    @Inject('GAMES_REPOSITORY')
    private readonly gamesRepository: GamesRepositoryInterface,
  ) {}
  execute(input: GetGamesPaginationDTO) {
    const page = Number(input.page) || 1;
    const pageSize = Number(input.pageSize) || 10;

    return this.gamesRepository.findAll(
      page,
      pageSize,
      input.sort,
      input.search,
    );
  }
}
