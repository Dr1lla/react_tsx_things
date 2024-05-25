import React, { FC, useEffect, useState } from 'react';
import { IPropsUsers } from "../interfaces/User.interface";
import UserComponent from "../user/UserComponent";

const Users: FC = () => {

    const [users, setUser] = useState<IPropsUsers[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUser(data);
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
