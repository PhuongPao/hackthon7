import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import './Airdrop.scss'
import { useNavigate } from 'react-router-dom'
import { WalletContext } from '../../context/WalletContext'
import { ShyftService } from '../../services/shyft.service'

export default function Airdrop() {
    const navigate = useNavigate()
    const { walletAddress } = useContext(WalletContext)
    const [ taken, setTaken ] = useState(false);
    
    useEffect(() => {
        const walletWasTake = localStorage.getItem('wasTakeAirdrop')
        if (!walletAddress) {
            navigate('/')
        } else if (walletWasTake && walletWasTake === walletAddress) {
            setTaken(true);
        }
    }, [])

    const handleTakeAirdrop = async () => {
        try {
            const airdropResponse = await ShyftService.airdrop();
            const coded = airdropResponse.encoded_transaction[0];
            await ShyftService.signWithPrivate(coded);
            setTaken(true);
            localStorage.setItem('wasTakeAirdrop', walletAddress);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <main className="airdrop container">
            {!taken ?
                <>
                    <div className="airdrop__img">
                        <img src={'/assets/img/airdrop.png'} alt="" />
                    </div>
                    <Button onClick={handleTakeAirdrop}>Collect</Button>
                </>
                :
                <>
                    <p className='airdrop__noti'>You have successfully participated in an airdrop campaign! You received tokens as a reward, which can be used within our platform. Stay tuned for updates and explore the benefits of your tokens. Contact support for any assistance. Thank you for your support!</p>
                    <Button onClick={()=>navigate('/')}>Home</Button>
                </>
            }
        </main>
    )
}
