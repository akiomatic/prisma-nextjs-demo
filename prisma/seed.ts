import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.note.createMany({
    data: [
      {
        title: "Note 1",
        content: "This is the first note",
      },
      {
        title: "Note 2",
        content: "This is the second note",
      },
      {
        title: "Note 3",
        content: "This is the third note",
      },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
