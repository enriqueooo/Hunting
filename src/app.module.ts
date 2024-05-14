import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreaturesModule } from './creatures/creatures.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [CreaturesModule, PrismaModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
