import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    }
    const search = (event) => {
        // console.log("Key Press");
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서 url을  바꿔준다
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);     //메인 리스트화면으로 이동

        }
    }

    return (
        <div>
            <div>
                {authenticate ? (
                    <div className='login-button' onClick={()=>setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className='login-button' onClick={()=>navigate("/login")}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}


            </div>
            <div className='nav-section'>
                <img width={100} src='http://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg' />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
