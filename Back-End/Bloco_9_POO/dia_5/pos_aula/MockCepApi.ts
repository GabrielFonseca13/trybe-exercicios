import ICepApi from "./ICepAPI";

class MockCepApi implements ICepApi {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The Mock address for CEP: ${cep}, nº ${number} is "Mock Address`;
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `The Mock Cep for Address: ${address}, nº ${number} is "Mock Address`;
  }

}

export default MockCepApi;