import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { PlayListModule } from './playlists/playlists.module';
import { DB_CONFIG } from 'src/config/database';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG), SongsModule, PlayListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
    // Apply middleware for specific HTTP Method
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST });
  }
}
