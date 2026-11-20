import {Metadata} from "next";
import Link from "next/link";
import {userService} from "@/services/api.service";

type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    const user = await userService.getById(id);
    return {title: `User ${user.name}`};
};

const UserPage = async ({params}: Props) => {
    const {id} = await params;
    const user = await userService.getById(id);

    return (
        <div className="card">
            <h2>{user.id}. {user.name}</h2>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Address:</b> {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
            <p><b>Company:</b> {user.company.name} — {user.company.catchPhrase}</p>
            <Link href="/users">← All users</Link>
        </div>
    );
};

export default UserPage;
