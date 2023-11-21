import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/SGCE.svg';
import { useCallback, useState } from 'react';
import MobileNavBar from '../components/MobileNavBar';


export function MainLayout() {

  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(0);


  const handlePageChange = useCallback(
    (pageNumber: number, route: string) => {
      setActivePage(pageNumber);
      navigate(`${route}`);
    },
    [navigate]
  );

  return (
    <>
      <MobileNavBar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex w-full h-full flex-col ">
        <div className="hidden md:flex items-center justify-center h-18 bg-blue-dark p-5 pr-5 pl-5 w-full ">
          <img
            src={logo}
            className="h-6 cursor-pointer"
            onClick={() => handlePageChange(1, '/nps')}
          />
      
        </div>
        
       <div className='h-full w-full bg-blue-lighter'>
            <Outlet />

       </div>
      </div>
    </>
  );
}
