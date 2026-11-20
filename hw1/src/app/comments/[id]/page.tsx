import {Metadata} from "next";
import Link from "next/link";
import {commentService} from "@/services/api.service";

type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    const comment = await commentService.getById(id);
    return {title: `Comment ${comment.id}`};
};

const CommentPage = async ({params}: Props) => {
    const {id} = await params;
    const comment = await commentService.getById(id);

    return (
        <div className="card">
            <h2>{comment.id}. {comment.name}</h2>
            <p><b>Email:</b> {comment.email}</p>
            <p>{comment.body}</p>
            <p><b>Post:</b> <Link href={`/posts/${comment.postId}`}>post #{comment.postId}</Link></p>
            <Link href="/comments">← All comments</Link>
        </div>
    );
};

export default CommentPage;
