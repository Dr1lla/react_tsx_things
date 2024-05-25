import React, {ReactNode, FC} from 'react';
import {IPropsUsers} from "../interfaces/User.interface";

type UserComponentWithChildren<T> = T & { children?: ReactNode } & { clickHandler: (id:number) => void};
const UserComponent: FC<UserComponentWithChildren<IPropsUsers>> = ({ id, name, email, userName, clickHandler}) => {
    return (
        <div>
            <div>{id} - {name} Username - {userName} Email - {email}</div>
            <button onClick={() =>{
                clickHandler(id)
            }}>Chose</button>
        </div>
    );
};

export default UserComponent;