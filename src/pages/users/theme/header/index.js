// import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "../../../../untils/formater";
// import { ROUTERS } from "../../../../untils/router";
const cx = classNames.bind(styles);
function Header() {
  // const [menus, setMenus] = useState([
  //   {
  //     name: "Trang Chủ",
  //     path: ROUTERS.USER.HOME,
  //   },
  // ]);
  return (
    <>
      <div className={cx("header_top")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-6_top_left")}>
              <ul>
                <li>{`miễn phí ship đơn từ ${formatter(200000)}`}</li>
              </ul>
            </div>
            <div className={cx("col-6_top_right")}>
              <ul>
                <li>
                  <Link to={""}>
                    <CgProfile />
                    <span>Đăng nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-xl-3")}>
            <div className="header_logo">
              <h1>Highland</h1>
            </div>
          </div>
          <div className={cx("col-xl-6")}>MENU</div>
          <div className={cx("col-xl-3")}>
            <div className={cx("header_cart")}>
              <div className={cx("header_cart_price")}>
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
