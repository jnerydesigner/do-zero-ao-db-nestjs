import { PrismaService } from '@infra/database/postgres/prisma.service';
import { GamesPrismaRepository } from '@infra/database/postgres/repository/games-prisma.repository';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: 'GAMES_REPOSITORY',
      useFactory: (prismaService: PrismaService) => {
        return new GamesPrismaRepository(prismaService);
      },
      inject: [PrismaService],
    },
  ],
  exports: [PrismaService, 'GAMES_REPOSITORY'],
})
export class DatabaseModule {}
