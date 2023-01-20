import axios from 'axios';
import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyApiResponse, CurrencyService } from './currency.service';

jest.mock('axios');

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getConversionRates', () => {
    it('should return rates for USD when axios request is successful', async () => {
      // given
      const base = 'USD';
      const responseData: CurrencyApiResponse = {
        success: true,
        timestamp: 1674202983,
        source: 'USD',
        quotes: {
          USDAED: 3.67297,
          USDAFN: 88.805423,
          USDALL: 107.408006,
          USDAMD: 395.22533,
          USDANG: 1.799918,
          USDAOA: 503.561048,
          USDARS: 183.099896,
          USDAUD: 1.440501,
          USDAWG: 1.8,
          USDAZN: 1.696707,
          USDBAM: 1.804896,
          USDBBD: 2.016491,
          USDBDT: 103.810017,
          USDBGN: 1.80505,
          USDBHD: 0.376969,
          USDBIF: 2071.308272,
          USDBMD: 1,
          USDBND: 1.323545,
          USDBOB: 6.900911,
          USDBRL: 5.174702,
          USDBSD: 0.998694,
          USDBTC: 4.7778456e-5,
          USDBTN: 81.232991,
          USDBWP: 12.771351,
          USDBYN: 2.520822,
          USDBYR: 19600,
          USDBZD: 2.013077,
          USDCAD: 1.345275,
          USDCDF: 2028.503279,
          USDCHF: 0.915599,
          USDCLF: 0.029854,
          USDCLP: 823.750141,
          USDCNY: 6.773596,
          USDCOP: 4684.86,
          USDCRC: 563.300864,
          USDCUC: 1,
          USDCUP: 26.5,
          USDCVE: 101.754742,
          USDCZK: 22.050975,
          USDDJF: 177.793774,
          USDDKK: 6.8552,
          USDDOP: 56.656777,
          USDDZD: 135.868023,
          USDEGP: 29.842801,
          USDERN: 15,
          USDETB: 53.567061,
          USDEUR: 0.92145,
          USDFJD: 2.174898,
          USDFKP: 0.808764,
          USDGBP: 0.80858,
          USDGEL: 2.649758,
          USDGGP: 0.808764,
          USDGHS: 11.984109,
          USDGIP: 0.808764,
          USDGMD: 62.350188,
          USDGNF: 8602.858053,
          USDGTQ: 7.839705,
          USDGYD: 208.935666,
          USDHKD: 7.83338,
          USDHNL: 24.638357,
          USDHRK: 7.042201,
          USDHTG: 149.304873,
          USDHUF: 364.290977,
          USDIDR: 15055.2,
          USDILS: 3.40215,
          USDIMP: 0.808764,
          USDINR: 81.150504,
          USDIQD: 1457.598339,
          USDIRR: 41850.000105,
          USDISK: 142.359734,
          USDJEP: 0.808764,
          USDJMD: 153.076075,
          USDJOD: 0.709302,
          USDJPY: 128.914985,
          USDKES: 124.193384,
          USDKGS: 85.888899,
          USDKHR: 4110.592784,
          USDKMF: 454.825013,
          USDKPW: 900.006704,
          USDKRW: 1232.925006,
          USDKWD: 0.30532,
          USDKYD: 0.832214,
          USDKZT: 463.042686,
          USDLAK: 16842.974673,
          USDLBP: 1510.038159,
          USDLKR: 366.520951,
          USDLRD: 156.350019,
          USDLSL: 17.28016,
          USDLTL: 2.95274,
          USDLVL: 0.60489,
          USDLYD: 4.770237,
          USDMAD: 10.162555,
          USDMDL: 18.940214,
          USDMGA: 4316.803632,
          USDMKD: 56.860076,
          USDMMK: 2097.23862,
          USDMNT: 3463.164865,
          USDMOP: 8.054724,
          USDMRO: 356.999828,
          USDMUR: 43.897201,
          USDMVR: 15.349707,
          USDMWK: 1012.705737,
          USDMXN: 18.942195,
          USDMYR: 4.291006,
          USDMZN: 63.830257,
          USDNAD: 17.279785,
          USDNGN: 453.580135,
          USDNIO: 36.493003,
          USDNOK: 9.873635,
          USDNPR: 129.976606,
          USDNZD: 1.55462,
          USDOMR: 0.385015,
          USDPAB: 0.998685,
          USDPEN: 3.827154,
          USDPGK: 3.519733,
          USDPHP: 54.491502,
          USDPKR: 229.622609,
          USDPLN: 4.344583,
          USDPYG: 7402.721446,
          USDQAR: 3.64103,
          USDRON: 4.535304,
          USDRSD: 108.154999,
          USDRUB: 68.615002,
          USDRWF: 1073.703056,
          USDSAR: 3.756442,
          USDSBD: 8.265027,
          USDSCR: 13.592188,
          USDSDG: 573.500846,
          USDSEK: 10.2944,
          USDSGD: 1.321205,
          USDSHP: 1.377398,
          USDSLE: 19.200417,
          USDSLL: 19185.000386,
          USDSOS: 569.508288,
          USDSRD: 31.725014,
          USDSTD: 20697.981008,
          USDSVC: 8.738263,
          USDSYP: 2511.9486,
          USDSZL: 17.203132,
          USDTHB: 32.736499,
          USDTJS: 10.231492,
          USDTMT: 3.5,
          USDTND: 3.085504,
          USDTOP: 2.328702,
          USDTRY: 18.802297,
          USDTTD: 6.784698,
          USDTWD: 30.327504,
          USDTZS: 2335.000174,
          USDUAH: 36.70378,
          USDUGX: 3675.130464,
          USDUYU: 39.547814,
          USDUZS: 11270.162649,
          USDVEF: 1994917.458852,
          USDVES: 19.959523,
          USDVND: 23450,
          USDVUV: 116.240017,
          USDWST: 2.675591,
          USDXAF: 605.346967,
          USDXAG: 0.041623,
          USDXAU: 0.000517,
          USDXCD: 2.70255,
          USDXDR: 0.739845,
          USDXOF: 605.34138,
          USDXPF: 110.495264,
          USDYER: 250.350055,
          USDZAR: 17.22654,
          USDZMK: 9001.210825,
          USDZMW: 18.675544,
          USDZWL: 321.999592,
        },
      };
      // axios.get = jest.fn().mockResolvedValueOnce({ data: responseData });
      // when
      const result = await service.getConversionRates(base);
      // then
      // expect(axios.get).toBeCalledWith('', {});
      expect(result).toBe(responseData);
      expect(Object.values(responseData.quotes).length).toBeGreaterThan(10);
    });
    // it('should throw Error when axios request failed', async () => {
    //   // given
    //   const base = 'USD';
    //   // when

    //   // then
    // })
  });
});