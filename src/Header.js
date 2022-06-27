
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
	let user = JSON.parse(localStorage.getItem("user-info"));
	const history = useNavigate();

	function logOut() {
		localStorage.clear();
		history("/register");
	}

	return (
		<div>
			<Navbar bg="dark" variant="dark">
			    <Container>
			    <Navbar.Brand href="#home">React App</Navbar.Brand>
			    <Nav className="me-auto navbar_wrapper">
			      {
			      	localStorage.getItem("user-info") ?
			      	<>
			      		 <Link to="/add">Add Products</Link>
			     		 <Link to="/update">Update Products</Link>
			      	</>
			      	:
			      	<>
			      		<Link to="/login">Login</Link>
			     		<Link to="/register">Register</Link>
			      	</>
			      }
			    </Nav>

			    { 

			    localStorage.getItem('user-info') ?
				    <Nav>
				    	<NavDropdown title={user && user.name }>
				    		<NavDropdown.ItemText onClick={logOut}>Logout</NavDropdown.ItemText>
				    	</NavDropdown>
				    </Nav>
				    :null
				}
		    </Container>
		  </Navbar>
		</div>
	)
}

export default Header;