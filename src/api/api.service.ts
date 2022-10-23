import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DESC_ORDER, HIPO_LAB_URL } from '../constant';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}
  async getUniversity(name: string, order: string) {
    const url = HIPO_LAB_URL + 'search?name=' + name;
    const sortedResponse = [];
    const response = await this.httpService
      .get(url)
      .toPromise()
      .catch((err) => {
        throw new HttpException(err.response.data, err.response.status);
      });
    response.data.forEach((element) => {
      sortedResponse.push({
        name: element.name,
        country: element.country,
      });
    });
    // sort the result by order passed in api query
    // If the order specified by user id desc we change the direction of sorting and
    // sort function return value will be multiplied by -1 to change the order
    const sortingOrder = DESC_ORDER === order ? -1 : 1;

    sortedResponse.sort(function (a, b) {
      if (a.name < b.name) {
        return -1 * sortingOrder;
      }
      if (a.name > b.name) {
        return 1 * sortingOrder;
      }
      return 0;
    });

    // Get only unique value in the result, remove duplicate
    for (let count = 0; count < sortedResponse.length - 1; count++) {
      if (
        sortedResponse[count].name === sortedResponse[count + 1].name &&
        sortedResponse[count].country === sortedResponse[count + 1].country
      ) {
        sortedResponse.splice(count, 1);
        count--;
      }
    }

    return sortedResponse;
  }
}
