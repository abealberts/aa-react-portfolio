import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />
        <Nav />
            {/* <div className='is-fullheight'> */}
              <Outlet />
            {/* </div> */}
        <Footer className='footer'/>
    </>
  )
}

export default App
