import {NavLink} from 'react-router-dom'

function Sidevar() {
    return (
        <aside className='sidevar'>
            <ul>
                <li >
                    <NavLink to="/" exact="true"  className='side-nav'>
                        <i className="lni lni-home font "></i>
                        <span className='margin-l-1'>Home</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/articles" className='side-nav'>
                        <i className="lni lni-text-format font"></i>
                        <span className='margin-l-1 font-1'>Articles</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/peoples" className='side-nav'>
                    <i className="lni lni-users font"></i>
                        <span className='margin-l-1 font-1'>Peoples</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/books" className='side-nav'>
                        <i className="lni lni-book font"></i>
                        <span className='margin-l-1 font-1'>Books</span>
                    </NavLink>
                </li>
                <li > 
                    <NavLink to="/help" className='side-nav'>
                        <i className="lni lni-support font"></i>
                        <span className='margin-l-1'>Help & Support</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidevar