import React, {useState} from 'react';

//header data 불러오기
import {headerNav} from "../../data/header";

const Header = () => {

    // show라는 상태 변수를 생성하고 useState 훅으로 초기값을 false로 설정
    // show가 true이면 모바일 메뉴 노출, false이면 비노출.

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        //로고 및 메뉴를 포함하고 있는 영역 role = banner
        <header id='header' role='banner'>
            <div className='header__inner'>
                <div className='header__logo'>
                    <a href="/">PortFolio <em>vite</em></a>
                </div>
                <nav className='header__nav' role='navigation' aria-label="메인 메뉴">
                    <ul>
                        {/* 
                            map()은 JavaScript의 배열 메서드 중 하나로 
                            배열의 각 요소를 변환하여 새로운 배열을 반환하는 함수이다.
                        */}
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    id='headerToggle'
                    className='header__nav__mobile'
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"}
                    role="button" 
                    tabindex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;