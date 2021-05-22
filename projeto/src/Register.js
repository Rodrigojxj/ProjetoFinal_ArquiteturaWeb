import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RegisterUser = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const {currentUser, register} = useAuth();

    console.log(currentUser);

    async function handleSubmit(e){
        e.preventDefault();
        const user = {name, password};
        console.log(user);

        try{
            setError("");
            setIsPending(true);
            await register(user.name, user.password);
            alert("Você criou uma conta!");
            history.push("/");
        }catch{
            setError('Falha ao criar conta');
            console.log(error);
        }
        setIsPending(false);

    }

    return (
        <div className="App">
            <div className="content">
                <div className="create">
                    <h2>Cadastre-se</h2>
                    <form onSubmit={handleSubmit}>
                        <label>E-mail:</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Senha:</label>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        { !isPending && <button>Cadastrar</button> }
                        { isPending && <button disabled>Cadastrando...</button> }
                        {/*currentUser.email*/}
                    </form>
                </div>
                <div className="loginlink">
                    <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;