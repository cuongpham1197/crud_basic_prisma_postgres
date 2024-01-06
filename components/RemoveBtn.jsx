import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RemoveBtn({ id }) {
    const router = useRouter();


    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?")

        if (confirmed) {
            // const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            //     method: "DELETE",
            // });

            const res = await axios.delete(`http://localhost:3000/api/topics?id=${id}`)

            if (res) {
                router.refresh();
            }
        }
    }

    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}