import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const NavBar = () => {
    const navLinkStyle = ({isActive}) => {
        return{
            color : isActive ? 'white' : 'black',
            background: isActive ? 'black' : 'none',
            
        }
    }

    const auth = useAuth()
  return (
    <nav className='primary-nav'>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        <NavLink style={navLinkStyle} to='/contact'>Contact</NavLink>
        <NavLink style={navLinkStyle} to='/product'>Product</NavLink>
        <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
        {
          !auth.user && (
            <NavLink style={navLinkStyle} to='/login'>
              Login
            </NavLink>
          )
        }
    </nav>
  )
}
export default NavBar;
