import { GetGamesUseCase } from '@application/use-case/get-games.use-case';
import { Module } from '@nestjs/common';
import { GamesController } from '@presenters/controllers/games.controller';

@Module({
  providers: [GetGamesUseCase],
  controllers: [GamesController],
  exports: [GetGamesUseCase],
})
export class GamesModule {}
