import axios, {AxiosResponse} from 'axios';

export default class DataServices {
  public getAllData = async () => {
    const uri: string = 'http://10.0.2.2:3004/data';

    const respone = axios
      .get(uri)
      .then((r: AxiosResponse) => r.data.stockItemResponses)
      .then((r: any) => {
        console.log(r);
      });

    return respone;
  };
}
