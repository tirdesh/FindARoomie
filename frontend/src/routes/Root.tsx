import { Outlet } from 'react-router-dom';
import NavBar from '../home/NavBar/NavBar';

export default () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet/>
        </>
    );
}