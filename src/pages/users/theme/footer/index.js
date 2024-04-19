import react from "react";
import styles from "./footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3")}>
            <div className={cx("footer_about")}>
              <h1 className={cx("footer_about_logo")}>Highland</h1>
              <ul>
                <li>Địa chỉ: 34 Phú Mộng Kim long</li>
                <li>Phone: 0702324357 </li>
                <li>Email: nvd04062002@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className={cx("col-lg-6")}>
            <div className={cx("footer_widget")}>
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("col-lg-3")}>
            <div className={cx("footer_widget")}>
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng kí nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    {" "}
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
