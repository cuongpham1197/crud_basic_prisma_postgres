import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req, res) {
    if (req.method === "PUT") {
        const { id } = req.query;
        const { newTitle: title, newDescription: description } = await req.body;
        await prisma.topic.update({
            where: {
                id: id,
            },
            data: { title, description }
        })
        return res.status(200).json({ message: "Topic updated" })
    }

    if (req.method === "GET") {
        const { id } = req.query;
        console.log("id: ", id);

        const topic = await prisma.topic.findUnique({ where: { id: id } });
        return res.status(200).json({ topic })
    }
}

export default handler;