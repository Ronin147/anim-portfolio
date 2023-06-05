import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return(<div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;under construction&gt;</span>
            <Outlet />

            <span className='tags bottom-tags'>
            &lt;thanks&gt;
            <br />
            <span className='bottom-tag-html'></span>
            </span>

        </div>
        </div>
    )
}

export default Layout