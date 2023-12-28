// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // const { title, description } = await req.body;
    const body = await req.body;
    await prisma.topic.create({ data: body });
    res.status(201).json({ message: "Topic Created" })
  }

  if (req.method === "GET") {

    const topics = await prisma.topic.findMany();
    return res.status(200).json({ topics });
  }

  if (req.method === "DELETE") {
    const id = req.query.id;

    await prisma.topic.delete({ where: { id: id } });
    res.status(200).json({ message: "Topic Deleted" })
  }
}
