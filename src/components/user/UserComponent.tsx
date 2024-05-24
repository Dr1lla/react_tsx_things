import React, {ReactNode, FC} from 'react';
import {IPropsUsers} from "../interfaces/User.interface";

type UserComponentWithChildren<T> = T & { children?: ReactNode };
const UserComponent: FC<UserComponentWithChildren<IPropsUsers>> = ({ id, name, email, userName, children }) => {
    return (
        <div>
            <div>{id} - {name} Username - {userName} Email - {email}</div>
            {children}
        </div>
    );
};

export default UserComponent;