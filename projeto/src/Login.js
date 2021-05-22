import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RegisterUser = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const {currentUser, login} = useAuth();

    console.log(currentUser);

    async function handleSubmit(e){
        e.preventDefault();
        const user = {name, password};
        console.log(user);

        try{
            setError("");
            setIsPending(true);
            await login(user.name, user.password);
            history.push("/");
        }catch{
            console.log(error);
            alert('Falha ao fazer login!');
        }
        setIsPending(false);
    }

    return (
        <div className="content">
            <div className="create">
                <h2>Receitas de um computadeiro</h2>
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
                    { !isPending && <button>Entrar</button> }
                    { isPending && <button disabled>Entrando...</button> }
                    {/*currentUser.email*/}
                </form>
            </div>
            <div className="signuplink">
                <p>Não tem conta? <Link to="/register">Cadastre-se </Link></p>
            </div>
        </div>
    );
}

export default RegisterUser;