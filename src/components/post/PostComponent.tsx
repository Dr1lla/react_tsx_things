import React, {FC, ReactNode} from 'react';
import {IPost} from "../interfaces/Post.interface";

type IPostProps = { post: IPost } & { children?: ReactNode};
const PostComponent: FC<IPostProps> = ({post}) => {
    return (
        <div>

        </div>
    );
};

export default PostComponent;