import { Get, Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrmService } from 'src/orm/orm.service';

@Injectable()
export class CreaturesService {
  creaturesService: any;
  prisma: any;
  constructor(private orm: OrmService){}
  create(createCreatureDto: CreateCreatureDto) {
    return this.prisma.creature.create({data: createCreatureDto});
  }

  findAll() {
    
    return this.orm.creature.findMany();
  }

  findExtinct(){ 
  return this.prisma.creature.findMany({where: {extinct: true}});
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({ where: {id}});
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.creaturesService.update(+id, updateCreatureDto);
    return this.prisma.creature.update({
      where: { id },
      data: updateCreatureDto,
    });
  }

  remove(id: number) {
    return this.creaturesService.remove(+id);
    return this.prisma.article.delete({where: { id }});
  }
}
