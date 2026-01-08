import React from 'react';
import {Link} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to={'/mainpage'}>Главная Страница</Link> | {''}
                <Link to={'/aboutus}'}> О Нас</Link> | {''}
               
              
            </nav>
        
        </div>
    );
};
export default Layout;