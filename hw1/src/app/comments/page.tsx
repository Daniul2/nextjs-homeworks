import {Metadata} from "next";
import {commentService} from "@/services/api.service";
import {ItemsList} from "@/components/ItemsList";

export const metadata: Metadata = {title: 'Comments'};

const CommentsPage = async () => {
    const comments = await commentService.getAll();

    return (
        <div>
            <h1>Comments</h1>
            <ItemsList basePath="/comments" items={comments.map(({id, name}) => ({id, label: name}))}/>
        </div>
    );
};

export default CommentsPage;
