import { NestApplication } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { AuthService } from '../../src/auth/auth.service';
import { SignInResponseDto } from '../../src/auth/dto/sign-in-response.dto';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';
import { User } from '../../src/users/entities/user.entity';
import { UsersService } from '../../src/users/services/users.service';
import { nestAppInit } from '../app.utils';


describe('[Happy path] I can sign in', () => {
  let app: NestApplication;

  const userDTO: CreateUserDto = {
    email: 'signin_test_e2e@test.com',
    password: 'signin_test_e2e',
  };
  
  let usersProvider: UsersService;
  let user: User;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await nestAppInit(app);
    usersProvider = await moduleFixture.get(UsersService);
    user = await usersProvider.createWithPaswwordReturned(userDTO);
    
  });

  afterAll(async () => {
    await usersProvider.deleteOneById(user.id);
    await app.close();
  });


  it('[POST]/api/auth/sign-in I can sign-in with my email', async () => {
    return request(app.getHttpServer())
      .post('/api/auth/sign-in')
      .send({
        email: user.email,
        password: user.password,
      })
      .expect(async (res: Response) => {
        expect(res.status).toEqual(201);
        const body: SignInResponseDto = res.body as unknown as SignInResponseDto;

        expect(body).toHaveProperty('accessToken');
        expect(body.accessToken.length).toBeGreaterThan(8)
        expect(body.tokenType).toEqual('Bearer');
      });
  });

  it('[POST]/api/auth/sign-up I can\'t sign-up with an existing email', async () => {
    return request(app.getHttpServer())
      .post('/api/auth/sign-up')
      .send({
        email: user.email,
        password: user.password,
      })
      .expect(async (res: Response) => {
        expect(res.status).toEqual(409); 
      });
  });

});