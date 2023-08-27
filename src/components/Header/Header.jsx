import { useContext, useEffect, useState } from "react";
import "./Header.scss";
import Button from "../Button/Button";
import { WalletService } from "../../services/wallet.service";
import { Link, useNavigate } from "react-router-dom";
import { ShyftService } from "../../services/shyft.service";
import { WalletContext } from "../../context/WalletContext";
import { LoadingContext } from "../../context/LoadingContext";
export default function Header() {
  const navigate = useNavigate();
  const { walletAddress, setWalletAddress } = useContext(WalletContext);
  const [walletBalance, setWalletBalance] = useState("");
  const [loadingConnect, setLoadingConnect] = useState(false);

  useEffect(() => {
    (async () => {
      setLoadingConnect(true);
      if (walletAddress && !walletBalance) {
        try {
          // await getBalance(walletAddress);
          setWalletBalance({
            address: "5Ab6Q8TL2qgzEQNnnbYYk4SLeKTiV5qRYyoaJ7bCc2v6",
            balance: 100,
            associated_account: "9ZeBHgQoVemfJC2jEt8yRmXetWYhaE1U9ktifVGitUho",
            info: {
              name: "Mungbean",
              symbol: "MBE",
              image:
                "https://nftstorage.link/ipfs/bafkreifcspzy7hibi7dzo5rxjjfy7nkbfgj2njs2oky5skt4rn7gq2lgoa",
              decimals: 9,
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
      setLoadingConnect(false);
    })();
  }, []);

  const handleGoto = async (dest) => {
    await navigate("/");
    const item = document.querySelector(`.${dest}`);
    const position = item.offsetTop;
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  const getBalance = async (walletAddress) => {
    // const balance = await ShyftService.getBalance(walletAddress)
    // return setWalletBalance(balance);
    setWalletBalance({
      address: "5Ab6Q8TL2qgzEQNnnbYYk4SLeKTiV5qRYyoaJ7bCc2v6",
      balance: 100,
      associated_account: "9ZeBHgQoVemfJC2jEt8yRmXetWYhaE1U9ktifVGitUho",
      info: {
        name: "Mungbean",
        symbol: "MBE",
        image:
          "https://nftstorage.link/ipfs/bafkreifcspzy7hibi7dzo5rxjjfy7nkbfgj2njs2oky5skt4rn7gq2lgoa",
        decimals: 9,
      },
    });
  };

  const handleConnect = async () => {
    setLoadingConnect(true);
    const wallet = await WalletService.solanaConnect();
    if (wallet) {
      try {
        await setWalletAddress(wallet);
        await getBalance(wallet);
      } catch (e) {
        console.log(e);
      }
    }
    setLoadingConnect(false);
  };

  return (
    <header className="header container">
      <Link to={""}>
        <h1 className="header__brand">LIONS TEAM</h1>
      </Link>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a onClick={() => handleGoto("signup-section")}> Đặt sản </a>
        </li>
        <li className="header__menu-item">
          <a onClick={() => handleGoto("market-section")}>Tổng hợp các mùa </a>
        </li>
        <li className="header__menu-item">
          <a onClick={() => handleGoto("team-section")}>Thành Viên LIONS </a>
        </li>
      </ul>
      <div className="header__btn-group">
        <Link to="/create">
          <Button>Tải Lên </Button>
        </Link>
        {!walletAddress || !walletBalance ? (
          <Button
            color="bordered"
            onClick={handleConnect}
            disable={loadingConnect}
          >
            Connect Wallet
          </Button>
        ) : (
          <div className="profile">
            <div className="profile__info">
              <p>{walletBalance.balance}</p>
              <img src={walletBalance.info?.image} alt="profile info image" />
            </div>
            <p className="profile__walletid">{walletAddress}</p>
          </div>
        )}
      </div>
    </header>
  );
}
