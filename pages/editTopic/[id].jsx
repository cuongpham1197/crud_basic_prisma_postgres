import EditTopicForm from "@/components/EditTopicForm";
import { useRouter } from "next/router";
import axios from "axios";

export async function getServerSideProps({ params }) {
    const { id } = params;
    console.log("id: ", id)
    // const res = await fetch(`http://localhost:3000/api/topics/${id}`)
    // const data = await res.json();
    // console.log("data: ", data)

    const data = await axios.get(`http://localhost:3000/api/topics/${id}`).then((res) => res.data)
    return {
        props: { data: data.topic }
    }
}

// /** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function EditTopic({ data }) {
    const { title, description, id } = data
    return <EditTopicForm id={id} title={title} description={description} />;
}