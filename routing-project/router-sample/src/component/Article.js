import { NavLink } from 'react-router-dom'
import articles from '../data/data'

function Article() {
    console.log(articles)
    return (
        <aside className='main-page '>
            <h1 className='font-2 font-w'>Articles..</h1>
            <ul>
                {
                    articles.map((article) => 
                        <li key={article.slug} className='margin-t-2 '>
                            <NavLink to={`/articles/${article.slug}`} exact="true">
                            <h2 className='font font-w navy'>{article.title}</h2>
                            </NavLink>
                            <h2 className='margin-t-1'>{article.author}</h2>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}

export default Article