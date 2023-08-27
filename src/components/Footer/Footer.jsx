import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__top">
        <div className="footer__top-item">
          <p className="brand">LIONS TEAM </p>
          <p className="desc">
            LIONS TEAM được sáng lập ngày 26 tháng 8 năm 2023 được lọt vào top 10 trên thế giới là 1 trong những trang website được bình chọn nhiều nhất là dễ tiếp cận và úng dụng được cho nhiều người từ những món ăn khó nhất mà họ không có nghĩ là họ có thể làm được 
            {" "}
          </p>
        </div>
        <div className="footer__top-item">
          <p className="title">Thị trường tiếp cận</p>
          <ul className="list">
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Tất cả Tin tức về món ngon
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
               nghệ thuật đặt sắc
              </a>
            </li>
            <li>
              <a
               
                onClick={() => {
                  return;
                }}
              >
                Món ăn các mùa
              </a>
            </li>
            
          </ul>
        </div>
        <div className="footer__top-item">
          <h1 className="title">My Account</h1>
          <ul className="list">
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Favorite
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                My Collections
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top-item">
          <p className="title">Hãy trở thành vua đầu bếp</p>
          <p className="desc-s">
            Hãy tạo ra nhiều món ăn ngon và chia sẽ đến người dùng bạn sẽ được nhiều người chú ý tới và bạn sẽ được sự nổi tiếng và giao lưu những văn hoá ẩm thực từ các nước
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright © 2023 C2Tx420</p>
      </div>
    </footer>
  );
}
