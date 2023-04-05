import articles from "../data/data"
import React from "react"
import { Link,useParams } from "react-router-dom"

function SingleArticle(props){
    let {slug}=useParams()
    // console.log(useParams().slug)
      let article=articles.filter(a=>a.slug===slug)[0]
    return(
        
        <div className="main-page">
           <Link to='/articles'>
           <h2>👈Go To Articles</h2>
           </Link>
          <h2 className="margin-t-2 font font-w"> The slug of the article is::: {article.slug}</h2>
        </div>
    )
}


export default (SingleArticle)