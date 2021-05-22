import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>Receitas de um computadeiro</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Novo Blog</Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;