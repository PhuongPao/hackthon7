
import './SignUpNFT.scss';
import img1 from '../../assets/img/signup/signup-1.png'
import img2 from '../../assets/img/signup/signup-2.jpg'
import img3 from '../../assets/img/signup/signup-3.jpg'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';



export default function SignUpNFT() {
    const navigate = useNavigate();
    return (
        <div className='signupNFT'>
            <div className='signupNFT__left'>
                <div className='signupNFT__left-item'>
                    <img className='signupNFT__left-item-img' src={img1} alt="" />
                  
                </div>
                <div className='signupNFT__left-item'>
                    <img className='signupNFT__left-item-img' src={img2} alt="" />
                 
                </div>
                <div className='signupNFT__left-item'>
                    <img  className='signupNFT__left-item-img' src={img3} alt="" />
                    
                </div>
            </div>

            <div className='signupNFT__right'>
                <p className='signupNFT__right-title'>
                   Những món ăn ngon cho bạn Yummy
                </p>
                <p className='signupNFT__right-desc'>
                   Những món ăn đặt trưng của nền văn hoá Việt Nam có thể bạn chưa biết đến và bạn có thể nếm thử khi bạn không có cơ hội đến với Việt Nam chúng tôi sẽ giải đáp những thắc mắc của bạn . Khi bạn đã xem Website của chúng tôi 
                </p>
                <Button className={'signupNFT__right-btn'} onClick={()=>navigate('/airdrop')}>Món Ngon hôm nay là</Button>
            </div>
        </div>
    )
}
