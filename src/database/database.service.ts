import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from 'src/config/config.keys';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { ConfigModule } from '../config/config.module';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres' as 'postgres',
        host: config.get(Configuration.HOST),
        port: 5444,
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: true,
      } as ConnectionOptions;
    },
  }),
];
