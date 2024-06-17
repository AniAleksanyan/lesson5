import { useContext } from "react"
import { UserContext } from "./Context"

export const UserItem = ({id, name, salary}) => {
    const {onSalaryUp, onSalaryDown, onRemove} = useContext(UserContext)
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