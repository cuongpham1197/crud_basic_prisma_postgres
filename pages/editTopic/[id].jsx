import EditTopicForm from "@/components/EditTopicForm";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
    const { id } = params;
    console.log("id: ", id)
    const res = await fetch(`http://localhost:3000/api/topics/${id}`)
    const data = await res.json();
    console.log("data: ", data)
    return {
        props: { data: data.topic }
    }
}

export default function EditTopic({ data }) {
    const { title, description, id } = data
    return <EditTopicForm id={id} title={title} description={description} />;
}