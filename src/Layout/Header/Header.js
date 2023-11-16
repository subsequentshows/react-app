import './Header.scss';
import favicon from '../../assets/images/favicon.png';
import iconHuongDan from '../../assets/images/iconhuongdan.png';
import iconThongTin from '../../assets/images/iconthongbao.png';
import iconDanhMucKhac from '../../assets/images/icondanhmuckhac.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-info'>
          <div className='qi-group-icon'>
            <img src={favicon} alt='qi-group-icon' />
          </div>

          <div className='school-title'>THCS Huỳnh Tấn Phát</div>
        </div>
        <div className='other-wrapper'>
          <div className='select-year'>[admin]
            <a href="http://google.com"> Học kỳ I 2023-2024</a>
          </div>

          <div className='user-guide'>
            <img src={iconHuongDan} alt='Icon hướng dẫn' />
          </div>

          <div className='notification'>
            <img src={iconThongTin} alt='Bảng thông tin' />
          </div>

          <div className='other-category'>
            <img src={iconDanhMucKhac} alt='Icon danh mục khác' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
