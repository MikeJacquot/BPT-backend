import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BabiesModule } from './babies/babies.module';
import { BiometricsModule } from './biometrics/biometrics.module';
import { FamiliesModule } from './families/families.module';
import { MedicalAppointmentsModule } from './medical-appointments/medical-appointments.module';
import { MilestonesModule } from './milestones/milestones.module';
import * as connectionOptions from './ormconfig';

import { AttachedFilesModule } from './attached-files/attached-files.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(connectionOptions),
    AuthModule,
    UsersModule,
    FamiliesModule,
    BabiesModule,
    BiometricsModule,
    MedicalAppointmentsModule,
    MilestonesModule,
    AttachedFilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
