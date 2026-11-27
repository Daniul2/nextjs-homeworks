import type {Metadata} from "next";
import {CreateCarForm} from "@/components/CreateCarForm";

export const metadata: Metadata = {title: 'Create car'};

export default function CreateCarPage() {
    return (
        <div>
            <h2>Create car</h2>
            <CreateCarForm/>
        </div>
    );
}
