import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AssetModule } from './asset/asset.module';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [UserModule, AssetModule, MovementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
