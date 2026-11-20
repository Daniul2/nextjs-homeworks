import {Metadata} from "next";
import Link from "next/link";
import {postService} from "@/services/api.service";

type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    const post = await postService.getById(id);
    return {title: `Post ${post.id}`};
};

const PostPage = async ({params}: Props) => {
    const {id} = await params;
    const post = await postService.getById(id);

    return (
        <div className="card">
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <p><b>Author:</b> <Link href={`/users/${post.userId}`}>user #{post.userId}</Link></p>
            <Link href="/posts">← All posts</Link>
        </div>
    );
};

export default PostPage;
