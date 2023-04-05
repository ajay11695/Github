import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav className="flex align">
                <i className="fa-solid fa-database font-2"></i>
                <NavLink to='/' className='text-decoration white'>
                <h1 className="font-2  margin-l-1">Dashboard</h1>
                </NavLink>
                <p className=" margin-l-3">Search Documentation....</p>
            </nav>
        </header>
    )
}

export default Header