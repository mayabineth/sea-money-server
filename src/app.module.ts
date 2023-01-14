import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AssetModule } from './asset/asset.module';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [UserModule, AssetModule, MovementModule],
})
export class AppModule {}
