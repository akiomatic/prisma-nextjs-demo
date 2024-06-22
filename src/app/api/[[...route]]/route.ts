import { Hono } from "hono";
import { handle } from "hono/vercel";
import prisma from "@/lib/db";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.get("/notes", async (c) => {
  const notes = await prisma.note.findMany();

  return c.json({
    notes,
  });
});

app.get("/add", async (c) => {
  const note = await prisma.note.create({
    data: {
      title: "Note " + Math.floor(Math.random() * 100),
      content: "This is the note content",
    },
  });

  return c.json({
    message: "Note added!",
    note,
  });
});

export const GET = handle(app);
