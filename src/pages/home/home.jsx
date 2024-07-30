import { Header } from '../../components/header/header';
import { SideMenu } from '../../components/sideMenu/sideMenu';
import './home.css'; 

export function Home() {
    return (
        <div className=''>
           <Header/>
           <SideMenu />
        </div>
    );
}
