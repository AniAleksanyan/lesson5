
import { UserItem } from './UserItem';
export const UserList = ({ items, onSalaryUp, onSalaryDown, onRemove }) => {
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
                                onSalaryUp={onSalaryUp}
                                onSalaryDown={onSalaryDown}
                                onRemove={onRemove}
                            />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}