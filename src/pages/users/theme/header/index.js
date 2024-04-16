import React from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { formatter } from "../../../../untils/formater";
const cx = classNames.bind(styles);
function Header() {
  return (
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
  );
}

export default Header;
