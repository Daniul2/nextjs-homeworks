import {Metadata} from "next";
import {userService} from "@/services/api.service";
import {ItemsList} from "@/components/ItemsList";

export const metadata: Metadata = {title: 'Users'};

const UsersPage = async () => {
    const users = await userService.getAll();

    return (
        <div>
            <h1>Users</h1>
            <ItemsList basePath="/users" items={users.map(({id, name}) => ({id, label: name}))}/>
        </div>
    );
};

export default UsersPage;
