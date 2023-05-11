// import FooCepAPI from './FooCepAPI';
import ICepApi from './ICepAPI';

class CepService {
  private readonly cepApi: ICepApi;

  constructor(cepApi: ICepApi) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;