function NotFound(props) {
    let {people,book}=props
    if(people){
        return (
            <div className="main-page">
                <h1 className="textalign margin-t-2 font-w">People Not Found ❌</h1>;
            </div>
        )
    }

    if(book){
        return (
            <div className="main-page">
                <h1 className="textalign margin-t-2 font-w">Book Not Found ❌</h1>;
            </div>
        )
    }
    return (
        <div className="main-page">
            <h1 className="textalign margin-t-2 font-w">404 Page Not Found ❌</h1>;
        </div>
    )
  }
  
  export default NotFound;
  