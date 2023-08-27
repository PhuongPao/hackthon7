import React, { useContext, useEffect, useState } from 'react';
import './Home.scss';
import AmazeNFT from '../../components/AmazeNFT/AmazeNFT';
import SignUpNFT from '../../components/SignUpNFT/SignUpNFT';
import HumanCard from '../../components/HumanCard/HumanCard';
import Slider from 'react-slick';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ShyftService } from '../../services/shyft.service';
import useScrollTop from '../../hook/useScrollTop';
import { LoadingContext } from '../../context/LoadingContext';

export default function Home() {

  useScrollTop();

  const { setLoading } = useContext(LoadingContext);

  const [listNFT, setListNFT] = useState()

  // useEffect(() => {
  //   (async () => {
  //     if (!item?.content?.files?.length && !item?.nft?.image_uri) {
  //       const info = await NFTService.getInfo(item.uri);
  //       setInfo(info);
  //     } else {
  //       setInfo(item.content?.files[0]);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const getListNFT = await ShyftService.getList()
        console.log(getListNFT)
        setListNFT(getListNFT.nfts)

      } catch (e) {
        console.log(e)
      }
      setLoading(false);
    })();
  }, [])

  const teamlist = [
    // { name: 'Chung Từ', role: 'Supporter', img: '/assets/img/team/chung.png' },
    { name: 'Trần Phương ', role: 'Team Lead', img: '/assets/img/team/tthinh.jpg' },
    { name: 'Nguyễn Đức Tính', role: 'Member', img: '/assets/img/team/my.jpg' },

  ]

  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
  };
  return (
    <main className="home">
      {/* <section className="airdrop-section container">
        <AirdropComponent />
      </section> */}
      <section className="amaze-section container-fluid">
        <AmazeNFT />
      </section>
      <section className="signup-section container">
        <SignUpNFT />
      </section>
      <section className="market-section container-fluid">
        <h3>Marketplace</h3>
        <div className="product-list container">
          {listNFT && listNFT.map((itemData, idx) => (
            <ProductCard data={itemData} key={idx} />
          ))}
        </div>
      </section>
      <section className="team-section container-fluid">
        <h3>Our team</h3>
        <div className="teamlist container">
          <Slider {...sliderSetting}>
            {teamlist.map((person, idx) => (
              <HumanCard name={person.name} role={person.role} img={person.img} key={idx} />
            ))}
          </Slider>
        </div>
      </section>
    </main>
  )
}
