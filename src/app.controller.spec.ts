import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DUMMY_DATA } from './constant';
import { UniversityService } from './university/university.service';

describe('AppController', () => {
  let appController: AppController;
  let spyService: UniversityService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UniversityService,
      useFactory: () => ({
        getUniversity: jest.fn(() => DUMMY_DATA),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ApiServiceProvider],
    }).compile();

    appController = app.get<AppController>(AppController);
    spyService = app.get<UniversityService>(UniversityService);
  });

  describe('root', () => {
    it('should return "The Nest JS application is running."', () => {
      expect(appController.getHello()).toBe(
        'The Nest JS application is running.',
      );
    });
  });

  describe('getUniversity', () => {
    it('should call getUniversity for a university search', async () => {
      const name = 'Dec';
      const order = 'Asc';
      appController.getUniversities(name, order);
      expect(spyService.getUniversity).toHaveBeenCalled();
    });
  });
  describe('getUniversity', () => {
    it('should return  getUniversity for a result', async () => {
      const name = 'Dec';
      const order = 'Desc';
      expect(spyService.getUniversity(name, order)).toBe(DUMMY_DATA);
    });
  });
});
