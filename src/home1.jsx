import { Link } from 'react-router-dom';
import './home1.css';
import i1 from './assests/cycle13.jpg';
import i2 from './assests/c122.jpg';
import i3 from './assests/c13.jpg';
import i4 from './assests/c14.jpg';
import i5 from './assests/cc15.jpg';
import i6 from './assests/gc11.jpg';
import i7 from './assests/gc12.jpg';
import i8 from './assests/gc13.jpg';
import i9 from './assests/gc14.jpg';
import i10 from './assests/gc17.jpg';
const Home1 = () => {
    return (
        <div className='home-cont1'>
            <div className='navbar157'>
            <Link to="/login">
                  <button className="font15">LOGIN👤</button>
                </Link>
        

                <Link to="/remove">
                    <button className='font157'>LOGOUT👤</button>
                </Link > 

                <Link to="/home">
                    <button className='font158'>HOME👤</button>
                </Link>
            
            </div>
            <div className='box123'>
                <h2>GEARLESS CYCLES</h2>
                <div class="grid-container1">
                    <div class="grid-item"><Link to="/cycle1"><img src={i1} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle2"><img src={i2} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle3"><img src={i3} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle4"><img src={i4} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle5"><img src={i5} alt=""></img></Link></div>
                </div>
                <h2>GEAR CYCLES</h2>
                <div class="grid-container2">
                    <div class="grid-item"><Link to="/cycle6"><img src={i6} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle7"><img src={i7} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle8"><img src={i8} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle9"><img src={i9} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/cycle10"><img src={i10} alt=""></img></Link></div>
                </div>
            </div>
        </div>
    )

}
export default Home1;