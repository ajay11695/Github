import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './component/Article';
import Header from './component/Header'
import Home from './component/Home';
import Sidevar from './component/Sidevar';
import SingleArticle from './component/SingleArticle';
import Help from './component/Help';
import NotFound from './component/NotFound';
import Books from './component/Books';
import People from './component/People';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className='flex'>
        <Sidevar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/peoples' element={<People/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/help' element={<Help />} />
          <Route path='/articles' element={<Article />} />
          <Route path='/articles/:slug' element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
