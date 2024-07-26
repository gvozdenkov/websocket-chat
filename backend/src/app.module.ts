import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
