import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className='main-page'>
            <h2 className='font'>🚀 Welcome To Homepage </h2>
           <div className='flex justify'>
           <NavLink to="/articles">
                <h2 className='font-1 font-w h-article margin-t-2'>ARTICLES</h2>
            </NavLink>
           <NavLink to="/peoples">
                <h2 className='font-1 font-w h-article margin-t-2'>PEOPLES</h2>
            </NavLink>
           <NavLink to="/books">
                <h2 className='font-1 font-w h-article margin-t-2'>BOOKS</h2>
            </NavLink>

           </div>
        </div>
    )
}

export default Home