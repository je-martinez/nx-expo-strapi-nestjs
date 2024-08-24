import { Module } from '@nestjs/common';
import { PGBossModule } from '@apricote/nest-pg-boss';
import env from '../../config';

@Module({
  imports: [
    PGBossModule.forRoot({
      application_name: env().appName,
      host: env().host,
      user: env().user,
      password: env().password,
      database: env().database,
      schema: env().schema,
      port: env().port,
    }),
  ],
})
export class QueuesModule {}
