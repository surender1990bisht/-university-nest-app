import { Test, TestingModule } from '@nestjs/testing';
import { UniversityService } from './university.service';
import { ApiService } from '../api/api.service';
import { DUMMY_DATA } from '../constant';
import { HttpException } from '@nestjs/common';

class ApiServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUniversity(name: string, order: string) {
    return DUMMY_DATA;
  }
}

describe('UniversityService', () => {
  let universityService: UniversityService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversityService, ApiServiceProvider],
    }).compile();

    universityService = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(universityService).toBeDefined();
  });

  it('should get sorted unique result for university', async () => {
    const expectedResult = DUMMY_DATA;
    const result = await universityService.getUniversity('Dec', 'Asc');
    expect(result).toEqual(expectedResult);
  });
});
