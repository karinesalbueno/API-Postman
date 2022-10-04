
import Header from '../../components/Header';
import Label from '../../components/Label';
import './index.css';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header />
            <div className='content'>
            <Label />
            <div className='backgroundHome' />
            <img src={'./assets/menPng.png'} alt='png' className='png' />
            <img src={'./assets/BigPlant.png'} alt='png' className='Plantpng' />

            </div>
        </div>
    )
}

export default Home; 