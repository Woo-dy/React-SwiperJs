import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
   return (
      <>
         <header>
            <Link to="/">로고</Link>
            <ul>
               <li><Link to="/sub1">서브1</Link></li>
               <li><Link to="/sub2">서브2</Link></li>
            </ul>
         </header>
      </>
   );
}

export default Header;