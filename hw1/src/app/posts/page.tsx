import {Metadata} from "next";
import {postService} from "@/services/api.service";
import {ItemsList} from "@/components/ItemsList";

export const metadata: Metadata = {title: 'Posts'};

const PostsPage = async () => {
    const posts = await postService.getAll();

    return (
        <div>
            <h1>Posts</h1>
            <ItemsList basePath="/posts" items={posts.map(({id, title}) => ({id, label: title}))}/>
        </div>
    );
};

export default PostsPage;
