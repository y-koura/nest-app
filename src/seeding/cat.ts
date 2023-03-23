import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const cats = ['Meow', 'Mew', 'Purr'];

  await Promise.all(
    cats.map((cat) => {
      return prisma.cat.create({
        data: {
          name: cat,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
