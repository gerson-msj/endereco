import { useAppDispatch } from "../../hooks";
import { changeEndereco } from "../../store/endereco";
import type { IEndereco } from "../../types";

interface TextFieldProps {
    label: string
    name: keyof IEndereco
    value: string
}

export default function TextField(props: TextFieldProps) {

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = props.name
        const value = e.target.value
        dispatch(changeEndereco({ name, value }))
    }

    return (
        <div>
            <div>
                <label>{props.label}</label>
                <input type="text" name={props.name} onChange={handleChange} value={props.value} />
            </div>
        </div>
    )
}
