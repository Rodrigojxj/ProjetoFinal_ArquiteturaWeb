import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [picture, setPicture] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, picture, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="create">
                    <h2>Adicione um novo blog</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Título:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Corpo do blog:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Images:</label>
                        <input
                            multiple    
                            type="file"
                            name="picture"
                            onChange={(e) => setPicture(e.target.value)}
                        />
                        <label>Autor:</label>
                        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                            <option value="Mario">Mario</option>
                            <option value="Yoshi">Yoshi</option>
                            <option value="Rodrigo">Rodrigo</option>
                            <option value="Acauan">Acauan</option>
                        </select>
                        { !isPending && <button>Adicionar</button> }
                        { isPending && <button disabled>Adicionando blog...</button> }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;