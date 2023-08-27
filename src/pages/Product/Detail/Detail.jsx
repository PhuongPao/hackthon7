import React, { useContext, useEffect, useState } from 'react'
import { ShyftService } from '../../../services/shyft.service';
import { useParams } from 'react-router-dom';
import './Detail.scss'
import Button from '../../../components/Button/Button';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { LoadingContext } from '../../../context/LoadingContext';
import amazeImg2 from '../../../assets/img/signup/signup-3.jpg';


export default function Detail() {
  const { setLoading } = useContext(LoadingContext);
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        setProduct({
          "network": "devnet",
          "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
          "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
          "price": 200,
          "currency_symbol": "MBE",
          "nft_address": "sample",
          "nft": {
            "name": "Sample",
            "symbol": "Sample",
            "royalty": 10,
            "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
            "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
            "animation_url": "",
            "cached_animation_url": "",
            "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
            "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
            "mint": "sample",
            "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "creators": [
              {
                "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
                "share": 100,
                "verified": true
              }
            ],
            "collection": {},
            "attributes": {},
            "attributes_array": [],
            "files": [
              {
                "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
                "type": "image/jpeg"
              }
            ],
            "external_url": "",
            "is_loaded_metadata": true,
            "primary_sale_happened": false,
            "is_mutable": true,
            "token_standard": "NonFungible"
          },
          "list_state": "sample",
          "status": "active",
          "created_at": "2023-06-12T02:05:50.000Z",
          "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
        })
        sortRelated([
          {
            "network": "devnet",
            "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
            "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "price": 200,
            "currency_symbol": "MBE",
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
              "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "creators": [
                {
                  "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
                  "share": 100,
                  "verified": true
                }
              ],
              "collection": {},
              "attributes": {},
              "attributes_array": [],
              "files": [
                {
                  "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
                  "type": "image/jpeg"
                }
              ],
              "external_url": "",
              "is_loaded_metadata": true,
              "primary_sale_happened": false,
              "is_mutable": true,
              "token_standard": "NonFungible"
            },
            "list_state": "123123",
            "status": "active",
            "created_at": "2023-06-12T02:05:50.000Z",
            "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
          },
          {
            "network": "devnet",
            "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
            "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "price": 200,
            "currency_symbol": "MBE",
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
              "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "creators": [
                {
                  "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
                  "share": 100,
                  "verified": true
                }
              ],
              "collection": {},
              "attributes": {},
              "attributes_array": [],
              "files": [
                {
                  "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
                  "type": "image/jpeg"
                }
              ],
              "external_url": "",
              "is_loaded_metadata": true,
              "primary_sale_happened": false,
              "is_mutable": true,
              "token_standard": "NonFungible"
            },
            "list_state": "123123",
            "status": "active",
            "created_at": "2023-06-12T02:05:50.000Z",
            "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
          },
          {
            "network": "devnet",
            "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
            "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "price": 200,
            "currency_symbol": "MBE",
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
              "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "creators": [
                {
                  "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
                  "share": 100,
                  "verified": true
                }
              ],
              "collection": {},
              "attributes": {},
              "attributes_array": [],
              "files": [
                {
                  "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
                  "type": "image/jpeg"
                }
              ],
              "external_url": "",
              "is_loaded_metadata": true,
              "primary_sale_happened": false,
              "is_mutable": true,
              "token_standard": "NonFungible"
            },
            "list_state": "123123",
            "status": "active",
            "created_at": "2023-06-12T02:05:50.000Z",
            "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
          },
          {
            "network": "devnet",
            "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
            "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "price": 200,
            "currency_symbol": "MBE",
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
              "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
              "creators": [
                {
                  "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
                  "share": 100,
                  "verified": true
                }
              ],
              "collection": {},
              "attributes": {},
              "attributes_array": [],
              "files": [
                {
                  "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
                  "type": "image/jpeg"
                }
              ],
              "external_url": "",
              "is_loaded_metadata": true,
              "primary_sale_happened": false,
              "is_mutable": true,
              "token_standard": "NonFungible"
            },
            "list_state": "123123",
            "status": "active",
            "created_at": "2023-06-12T02:05:50.000Z",
            "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
          }
        ]
        )
        // const product = await ShyftService.getDetailNFTOfMarket(id);
        // const nftList = await ShyftService.getActiveListings();
        // setProduct(product);
        // sortRelated(nftList.data);
      } catch (e) {
        console.log(e)
      }
      setLoading(false);
    })();
  }, [])
  const sortRelated = (list) => {
    const sortList = [...list].filter(item => item.list_state !== id);
    setRelated(sortList);
  }
  return (
    <main className='detail-page container'>
      <h2 className='detail__title'>Canh Khổ Qua </h2>
      {product &&
        <div className="product">
          <div className='product__img-wrapper'>
            <img className='product__img' src={amazeImg2} alt="picture" />
          </div>

          <div className='product__info'>
            <p className='product__info-title'> Chi tiết công thức và cách chế biến  </p>
            <p className='product__info-desc'><ul>
              <li> 400g gạo nếp cái hoa vàng</li>
              <li> 200g đậu xanh đã đãi sạch vỏ</li>
              <li>  1 bó lạt tre</li>
              <li> 100g thịt ba chỉ</li>
              <li> 1 bó lá chuối (tàu lá dài, còn nguyên vẹn)</li>
              <li> Gia vị: Muối, hạt nêm, tiêu xay </li>
              <br />
              Bước 1: Xử Lý Gạo Nếp
Đầu tiên, bạn vo sạch gạo nếp cái hoa vàng, cho vào âu lớn ngâm trong nước khoảng 8 tiếng cho gạo nở mềm. Sau đó, bạn vớt gạo nếp ra rổ để ráo nước, rắc thêm 4g muối xóc đều. Đây là mẹo đơn giản trong cách làm bánh tét có thể giúp gạo nếp thấm vị, bánh khi nấu chín cũng sẽ đậm đà hơn.
Bước 2: Xử Lý Đậu Xanh
Tiếp đó, bạn đãi sạch vỏ đậu xanh, ngâm trong âu nước khoảng 4 tiếng để đậu xanh nở mềm. Sau thời gian đó, bạn vớt đậu xanh ra rổ, để ráo nước, cho thêm 4g muối vào cùng, xóc đều.
Bước 3: Xử Lý Lạt Tre Và Lá Chuối
Kế đến, bạn đem lạt tre ngâm trong nước khoảng 8 tiếng cho mềm. Sau đó, bạn xé lạt tre thành những sợi dài, có chiều ngang 0,5cm.
Tiếp theo, bạn rửa lá chuối, tước bỏ phần sống lưng lá, chia lá chuối thành những miếng dài khoảng 60cm, cuốn lại thành cuộn nhỏ. Lưu ý, bạn cần nhẹ tay để không làm lá chuối bị rách.
Bắc một nồi nước có 1 muỗng cà phê muối lên bếp đun sôi, bạn cho lá chuối vào chần sơ qua rồi vớt ra ngay. Làm như vậy, lá chuối sẽ mềm, khi thực hiện cách gói bánh tét cũng sẽ dễ dàng hơn.
Bước 4: Xử Lý Thịt Ba Chỉ
Kế tiếp, bạn rửa sạch, cắt thịt ba chỉ thành những miếng dài (khoảng 10 – 12cm) có chiều ngang 2cm.
Cách làm bánh tét nhân thịt ngon là cho thịt vào trong tô lớn, thêm 4g hạt nêm, 1g hạt tiêu, trộn đều và ướp trong khoảng 30 phút.
Bước 5: Cách Gói Bánh Tét Ngon
Tiếp đến, bạn trải lá chuối lên một mặt phẳng lớn như mâm, khay, mặt bàn sạch. Xếp 2 miếng lá chuối cạnh nhau (như hình tàu lá chuối ban đầu khi chưa rọc), xếp thêm 1 miếng vào giữa.
Bạn cho 200g gạo nếp vào giữa lá chuối, dàn mỏng 1 lớp gạo theo chiều ngang, tiếp đó cho thêm 100g đậu xanh. Lưu ý, lớp đậu xanh phải ít hơn gạo và nằm gọn trong lớp gạo trắng.
Tiếp theo, bạn đặt 1 miếng thịt ba chỉ lên trên đậu xanh để làm nhân, sau đó thêm 1 lớp đậu xanh 100g và 1 lớp gạo nếp 200g. Bạn cần chú ý để gạo phải phủ đều toàn bộ phần nhân đậu xanh và thịt.

            </ul></p>
            {/*   <p className='product__info-price'> {product.price}<span>{product.currency_symbol}</span></p> */}
          {/*   {<Button className="product__info-btn">Xem chi tiết cách nấu </Button>} */}
          </div>
        </div>
      }
      <div className="related">
        <h2 className='detail__title'>Related</h2>
        <div className="related__wrapper">
          {related && related.map((itemData, idx) => (
            <ProductCard className={'border'} data={itemData} key={idx} />
          ))}
        </div>
      </div>










    </main>
  )
}