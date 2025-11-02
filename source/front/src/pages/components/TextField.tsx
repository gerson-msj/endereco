import { useAppDispatch } from "../../hooks";
import { changeEndereco, type EnderecoState } from "../../store/endereco";

interface TextFieldProps {
    label: string
    name: keyof EnderecoState
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
