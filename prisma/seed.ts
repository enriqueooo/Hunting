import { PrismaClient } from '@prisma/client';

// Inicializar Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Crear dos criaturas ficticias
  const creature1 = await prisma.creature.upsert({
    where: { name: 'Aliens' },
    update: {},
    create: {
      name: 'Aliens',
      description: 'Ser ficticio de otro mundo.',
      lastSee: 'Simón Bolívar 1-62 y Manuel Vega',
      countLastSee: 12,  
      extinct: false,
    },
  });

  const creature2 = await prisma.creature.upsert({
    where: { name: 'Vampires' },
    update: {},
    create: {
      name: 'Vampires',
      description: 'Deja su tumba por la noche para beber la sangre de los vivos mordiendo sus cuellos con largos colmillos puntiagudos.',
      lastSee: 'Calderon Park',
      countLastSee: 5,  
      extinct: false,
    },
  });

  console.log({ creature1, creature2 });
}

// Ejecutar la función principal
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Cerrar Prisma Client al finalizar
    await prisma.$disconnect();
  });
