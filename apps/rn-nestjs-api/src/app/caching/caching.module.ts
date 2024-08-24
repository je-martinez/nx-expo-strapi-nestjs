import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CachingService } from './caching.service';

@Module({
  imports: [CacheModule.register()],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
