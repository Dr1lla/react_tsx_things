import React, { FC, useEffect, useState } from 'react';
import { IUser } from "../interfaces/User.interface";
import UserComponent from "../user/UserComponent";
import {getUsers} from "../services/User.api.services";
import PostsComponent from "../posts/PostsComponent";
import {IPost} from "../interfaces/Post.interface";
import {getPostOfUser} from "../services/Post.api.services";


const Main: FC = () => {

    const [users, setUser] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        if (userId !== 0){
            getPostOfUser(userId)
                .then(value => setPosts(value.data));
        }
    }, [userId]);

    useEffect(() => {
        getUsers().then(data => {
            setUser(data.data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });

        return () => {
            console.log('end');
        }
    }, []);

    const clickHandler = (id:number) => {
        setUserId(id);
        console.log(id);
    }

    return (
        <>
            {
                users.map(({ id, name, email, userName}, index:number) => (<UserComponent
                        key={index}
                        id={id}
                        name={name}
                        userName={userName}
                        email={email}
                        clickHandler={clickHandler}
                    />
                ))
            }

            <p>
                <PostsComponent posts={posts}/>
            </p>
        </>
    );
};

export default Main;
