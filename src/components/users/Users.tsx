import React, { FC, useEffect, useState } from 'react';
import { IUser } from "../interfaces/User.interface";
import UserComponent from "../user/UserComponent";
import {getUsers} from "../../services/User.api.services";


const Users: FC = () => {

    const [users, setUser] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(data => {
            setUser(data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });

        return () => {
            console.log('end');
        }
    }, []);

    const [userId, setUserId] = useState<number>(0)

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
            <p>{userId}</p>
        </>
    );
};

export default Users;
