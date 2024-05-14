import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrmModule } from 'src/orm/orm.module';
import { OrmService } from 'src/orm/orm.service';

@Module({
  controllers: [CreaturesController],
  providers: [CreaturesService],
  imports: [OrmModule],
})
export class CreaturesModule {}
