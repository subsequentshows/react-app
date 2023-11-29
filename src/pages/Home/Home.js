import React from 'react';
import '../Login/Login.scss';

const Home = () => {
  return (
    <div id='container'>
      <form id="form1" runat="server">
        <p>test</p>
        <div class="container-fluid">
          <div class="header">
            <div class="logo-and-title">
              <div class="company-logo">
                <a href="/">
                  <img src='' alt="CAU_HINH.LOGO" />
                </a>
              </div>

              <div class="login-title">
                <p class="so-title"></p>
                <p class="phan-mem-title">Hệ thống quản lý thu phí</p>
              </div>
            </div>
          </div>

          <div class="height-100">
            <div class="login-section">
              <div class="login-left">
              </div>

              <div class="login-right">
                <div class="login-section-title">
                  <div class="login-icon">
                    <img src='../files/iconlogin.png' alt='login-icon' />
                  </div>
                  <div class="login-text">
                    <p class="login-top-text">Đăng nhập hệ thống</p>
                    <p class="login-bottom-text">Quản lý cấp trường</p>
                  </div>
                </div>

                <div class="account-title">
                  <p>Thông tin tài khoản</p>
                </div>
                <div class="margin_top_line">
                  <div class="input-group md-form form-sm form-2 pl-0">
                    <input name="tbUserName" type="text" id="tbUserName" class="form-control my-0 py-1 red-border input-left-textbox box-shadow-bt" placeholder="Tài khoản đăng nhập" wfd-id="id6" />
                    <div class="input-group-append">
                      <span class="input-group-text red lighten-3 button-right-textbox box-shadow-bt">
                        <i class="fas fa-user text-grey qi-color"
                          aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="margin_top_line">
                  <div class="input-group md-form form-sm form-2 pl-0">
                    <input name="tbPassword" type="password" id="tbPassword" class="form-control my-0 py-1 red-border input-left-textbox box-shadow-bt" placeholder="Mật khẩu" wfd-id="id7" />
                    <div class="input-group-append">
                      <span class="input-group-text red lighten-3 button-right-textbox box-shadow-bt">
                        <i class="fas fa-lock text-grey qi-color"
                          aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="account-title">
                  <p>Thông tin đơn vị</p>
                </div>

                <div class="margin_top_line required">
                  <select>
                    <option value="someOption">Chọn sở</option>
                    <option value="otherOption">Other option</option>
                  </select>
                </div>

                {/* <%--rcbCapHoc--%> */}
                <div class="margin_top_line rcbCapHoc-wrapper">
                  <select>
                    <option value="someOption">Mần non</option>
                    <option value="otherOption">Tiểu học</option>
                    <option value="otherOption">Trung học cơ sở</option>
                    <option value="otherOption">Trung học phổ thông</option>
                    <option value="otherOption">Giáo dục thường xuyên</option>
                  </select>
                </div>

                {/* <%--rcbPhongGD--%> */}
                <div class="margin_top_line rcbPhongGD-wrapper">
                  <select>
                    <option value="someOption">Chọn phòng</option>
                    <option value="otherOption">Other option</option>
                  </select>
                </div>

                {/* <%--rcbTruong--%> */}
                <div class="margin_top_line required rcbTruong-wrapper">
                  <select>
                    <option value="someOption">Chọn trường</option>
                    <option value="otherOption">Other option</option>
                  </select>
                </div>

                <div class="margin_top_line captcha-section required">
                  <div class="captcha-wrapper">
                    <div class="captcha-input input-group">
                      <input name="tbCapcha" type="text" id="tbCapcha" class="form-control input-captcha" nulltext="Mã xác nhận" placeholder="Nhập mã xác nhận" autocomplete="off" wfd-id="id16" />
                    </div>
                    <div class="captcha-text">
                      <table>
                        <tr>
                          <td class="captcha">

                          </td>
                          <td class="captcha-refresh">
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="remember">
                  <input></input>
                  <label>Ghi nhớ tài khoản</label>
                </div>

                {/* <%--signInBtn--%> */}
                <div class="signin-btn">
                  <button ID="btSignin" runat="server" CssClass="btn btn-default btn-qi" Text="Đăng nhập" ClientIDMode="Static" OnClick="btSignin_Click"></button>
                  <input type="submit" name="btSignin" value="Đăng nhập" id="btSignin" class="btn btn-default btn-qi" wfd-id="id18">

                  </input>
                </div>
              </div>
            </div>
          </div>

          <div class=" copyright-section">
            <p class="copyright-title">Hệ thống quản lý thu phí</p>

            <p>
              Copyright © 2022 QuangIch. All Rights Rerverved <span class="divider">-</span>
            </p>
            <div class="hotline-and-email">
              <p>Hotline: <span class="qi-color">CAU_HINH.HOT_LINE</span></p>
              <p>Email: <span class="qi-color">CAU_HINH.EMAIL </span></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
