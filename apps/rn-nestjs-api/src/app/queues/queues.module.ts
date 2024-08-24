import { Module } from '@nestjs/common';
import { PGBossModule } from '@apricote/nest-pg-boss';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    PGBossModule.forRootAsync({
      application_name: 'default',
      useFactory: (config: ConfigService) => ({
        // Connection details
        host: config.get<string>('DB_HOST'),
        user: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        schema: 'public',
        max: config.get<number>('DB_POOL_MAX'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class QueuesModule {}
