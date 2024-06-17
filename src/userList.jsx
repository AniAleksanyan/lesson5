
import { useContext } from 'react';
import { UserItem } from './UserItem';
import { UserContext } from './Context';

export const UserList = () => {
    const {items} = useContext(UserContext)
    return (
        <>
            <h3>UserList</h3>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(elm =>
                            <UserItem
                                key={elm.id}
                                {...elm}
                            />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}