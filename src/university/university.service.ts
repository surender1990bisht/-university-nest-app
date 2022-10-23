import { HttpException, Injectable } from '@nestjs/common';
import { ASC_ORDER, DESC_ORDER } from '../constant';
import { ApiService } from '../api/api.service';

@Injectable()
export class UniversityService {
  constructor(private apiService: ApiService) {}
  public async getUniversity(name: string, order: string): Promise<any> {
    if ('string' !== typeof name) {
      throw new HttpException('Provided University Name is not string', 500);
    }
    if (DESC_ORDER !== order && ASC_ORDER !== order) {
      throw new HttpException(
        'Sorting order is not in correct format ( either "Asc" or "Desc" is allowed)',
        500,
      );
    }
    const universityList = await this.apiService.getUniversity(name, order);

    return universityList;
  }
}
