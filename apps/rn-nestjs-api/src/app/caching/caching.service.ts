import { Injectable } from '@nestjs/common';
import * as cacheManager from 'cache-manager';
import * as memcachedStore from 'cache-manager-memcached-store';

@Injectable()
export class CachingService {
  private cache: cacheManager.Cache;

  constructor() {
    this.cache = cacheManager.caching({
      store: memcachedStore,
      url: 'localhost:11211',
      ttl: 60,
    });
  }

  async get<T>(key: string): Promise<T> {
    return this.cache.get(key);
  }

  async set<T>(key: string, value: T): Promise<void> {
    await this.cache.set(key, value);
  }

  async del(key: string): Promise<void> {
    await this.cache.del(key);
  }
}
