export const UserItem = ({id, name, salary, onSalaryUp, onSalaryDown, onRemove}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>
                <button onClick={()=>onSalaryUp(id)}>Salary Up</button>
                <button onClick={()=>onSalaryDown(id)}>Salary Down</button>
                <button onClick={()=>onRemove(id)}>Remove</button>
            </td>
        </tr>
    )
}