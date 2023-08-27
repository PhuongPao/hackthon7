import React, { useEffect, useState } from 'react'
import './ProductCard.scss'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../services/api.service';

export default function ProductCard({ data, className }) {
  console.log(data)
  const [dataNFT, setDataNFT] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await ApiService.get(data.uri)
      console.log(res)
      setDataNFT(res)
    })()
  }, [data.uri])



  const handleGoTo = (e) => {
    e.stopPropagation();
    navigate(`/product/${data.list_state}`)

  }
  return (
    <div onClick={(e) => handleGoTo(e)} className={`${className} product-card`}>
      <img src={dataNFT?.image} alt="" />
      <div className="product-card__bottom">
        <p className="name">{dataNFT?.name}</p>
        {/* <p className="price">{data.price}<span>{data.currency_symbol}</span></p> */}
        <div className="btn-wrapper">
          <Button onClick={(e) => handleGoTo(e)} size='s'>Details</Button>
        </div>
      </div>
    </div>
  )
}
