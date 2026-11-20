import {notFound} from "next/navigation";
import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const getData = async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(baseUrl + endpoint);

    if (response.status === 404) {
        notFound();
    }
    if (!response.ok) {
        throw new Error(`Request to ${endpoint} failed with status ${response.status}`);
    }

    return response.json();
};

export const userService = {
    getAll: () => getData<IUser[]>('/users'),
    getById: (id: string) => getData<IUser>(`/users/${id}`),
};

export const postService = {
    getAll: () => getData<IPost[]>('/posts'),
    getById: (id: string) => getData<IPost>(`/posts/${id}`),
};

export const commentService = {
    getAll: () => getData<IComment[]>('/comments'),
    getById: (id: string) => getData<IComment>(`/comments/${id}`),
};
