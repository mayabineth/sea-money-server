import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { CurrencyService } from 'src/currency/currency.service';

@Module({
  controllers: [AssetController],
  providers: [AssetService, CurrencyService]
})
export class AssetModule {}
