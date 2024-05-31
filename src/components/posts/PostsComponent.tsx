import React, { FC, ReactNode } from 'react';
import { IPost } from "../interfaces/Post.interface";
import PostComponent from "../post/PostComponent";

type IPostProps = { posts: IPost[] } & { children?: ReactNode };

const PostsComponent: FC<IPostProps> = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <PostComponent
                    key={post.id}
                    id={post.id}
                    userId={post.userId}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
};

export default PostsComponent;