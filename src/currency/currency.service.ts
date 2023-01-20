import { Injectable } from '@nestjs/common';
import axios, { RawAxiosRequestConfig } from 'axios';
import { key } from './api.key';

Injectable();
export class CurrencyService {
  private axiosCurrencyRequestConfig: RawAxiosRequestConfig = {
    url: 'https://api.apilayer.com/currency_data/live',
    method: 'GET',
    // redirect: 'follow',
  };
  // example of request url = 'https://api.apilayer.com/currency_data/live?base=USD&symbols=EUR,GBP
  private currencyApiUrl = 'https://api.apilayer.com/currency_data/live';

  async getConversion(
    baseCurrency: string,
    symbolsCurrencies: string[],
  ): Promise<unknown> {
    try {
      const result = await axios.get(this.currencyApiUrl, {
        ...this.axiosCurrencyRequestConfig,
        headers: { apiKey: key },
        params: {
          base: baseCurrency,
          symbols: symbolsCurrencies.join(','),
        }
      });
      console.log(`[CurrencyService:result]: ${result.data}`);
      return result.data;
    } catch (error) {
      console.error(`[CurrencyService:error]: ${error}`);
    }
  }
}
