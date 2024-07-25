import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
