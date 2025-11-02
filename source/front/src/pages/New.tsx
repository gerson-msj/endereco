import { useAppSelector } from "../hooks";
import TextField from "./components/TextField";

export default function New() {

    const endereco = useAppSelector(state => state.endereco);

    return (
        <>
            <nav>
                <a href="/">Voltar</a>
            </nav>
            <form>
                <TextField label="Nome" name="nome" value={endereco.nome} />
            </form>
        </>
    )
}