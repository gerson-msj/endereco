import { useEffect, useState } from "react"
import { type Cep, CepDefault, type IEndereco, EnderecoDefault } from "../types"

export default function Home() {

    const [endereco, setEndereco] = useState(EnderecoDefault);
    const [cep, setCep] = useState(CepDefault);

    const [enderecos, setEnderecos] = useState<IEndereco[]>([]);
    const [ceps, setCeps] = useState<Cep[]>([]);
    
    //const [seq, setSeq] = useState(1);

    const remove = (enderecoToRemove: IEndereco) =>
        setEnderecos(prev => prev.filter(e => e !== enderecoToRemove));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEndereco({ ...endereco, [name]: value });
    };

    const handleAdd = () => {

    }

    const handleSave = () => {

    }

    const obterTextoEndereco = (e: IEndereco) => {
        const c = e.cepData;
        return c 
            ? `${c.logradouro}, ${e.numero} ${e.complemento} - ${c.bairro} - ${c.localidade}/${c.uf}`
            : "";
    }

    const obterEnderecos = async (): Promise<IEndereco[]> => {
        try {
            const url = `http://localhost:3000/enderecos`;
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            const result = await response.json();
            return result?.length > 0 ? result as IEndereco[] : [];
        } catch (error) {
            console.log('Não foi possível obter os endereços:', error);
            return [];
        }
    }

    const obterCeps = async (): Promise<Cep[]> => {
        try {
            const url = `http://localhost:3000/ceps`;
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            const result = await response.json();
            return result?.length > 0 ? result as Cep[] : [];
        } catch (error) {
            console.log('Não foi possível obter os ceps:', error);
            return [];
        }
    }

    useEffect(() => {
        const obterCep = async (cep: string) => {
            try {
                const cepData = ceps.find(c => c.cep === cep);
                if (cepData) {
                    setCep(cepData);
                    return;
                }
                const url = `https://viacep.com.br/ws/${cep}/json/`;
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                const result = await response.json();
                setCep(result["cep"] ? result as Cep : CepDefault);

            } catch (error) {
                console.log('Não foi possível obter o endereço a partir do cep:', cep, error);
            }
        }
        
        if (endereco.cep.length !== 8)
            setCep(CepDefault);
        else
            obterCep(endereco.cep);

    }, [endereco.cep, ceps]);

    useEffect(() => {
        const carregarDados = async () => {
            const [enderecos, ceps] = await Promise.all([
                obterEnderecos(),
                obterCeps()
            ]);

            const cepMap = new Map(ceps.map(cep => [cep.cep, cep]));
            const enderecosCompletos = enderecos.map(e => ({
                ...e,
                cepData: cepMap.get(e.cep)
            }))

            setEnderecos(enderecosCompletos);
            setCeps(ceps);
        };

        carregarDados();
    }, []);

    return (
        <>
            <form>
                <div>
                    <button type="button" onClick={handleSave}>Salvar</button>
                </div>
                <div style={{ flexBasis: '100%' }} />
                <div>
                    <label>Nome</label>
                    <input type="text" name="nome" onChange={handleChange} />
                </div>
                <div>
                    <label>CEP</label>
                    <input type="text" name="cep" onChange={handleChange} />
                </div>

                <div>
                    <label>Numero</label>
                    <input type="text" name="numero" onChange={handleChange} />
                </div>
                <div>
                    <label>Complemento</label>
                    <input type="text" name="complemento" onChange={handleChange} />
                </div>
                <div style={{ flexBasis: '100%' }} />
                <div>
                    <label>Endereço</label>
                    <input type="text" readOnly value={cep.logradouro} />
                </div>
                <div>
                    <label>Bairro</label>
                    <input type="text" readOnly value={cep.bairro} />
                </div>
                <div>
                    <label>Cidade</label>
                    <input type="text" readOnly value={cep.localidade} />
                </div>
                <div>
                    <label>UF</label>
                    <input type="text" readOnly value={cep.uf} />
                </div>
                <div style={{ flexBasis: '100%' }} />
                <div>
                    <button type="button" onClick={handleAdd}>Adicionar</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enderecos.length === 0
                            ? (<tr><td colSpan={3}>Não existem endereços adicionados</td></tr>)
                            : enderecos.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.nome}</td>
                                    <td>{e.cep}</td>
                                    <td>{obterTextoEndereco(e)}</td>
                                    <td><button type="button" onClick={() => remove(e)}>Remover</button></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </>
    )
}