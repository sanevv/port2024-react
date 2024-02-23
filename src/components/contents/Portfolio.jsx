/* 
useRef는 리액트의 훅 중에 하나로, 함수형 컴포넌트에서 DOM요소에 접근하거나, 특정 값들을 기억하고 관리하는 기능을 제공
useRef를 사용하면 클래스형 컴포넌트에서의 this와 비슷한 역할을 할 수 있다.
*/
import React, { useEffect, useRef } from 'react';
import { portfolioList } from '../../data/portfolio';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Portfolio = () => {

    /*
        const horizontalRef = useRef(null);
        1. horizontalRef라는 변수를 생성하고 useRef 훅으로 초기화
        2. 가로 스크롤이 적용될 부묘 오쇼를 참조하는데 사용
    */
    const horizontalRef = useRef(null);

    /*
        const sectionsRef = useRef([]);
        1. sectionsRef라는 변수를 생성하고 빈 배열로 초기화
        2. 이 배열은 각 포트폴리오 아이템 요소들을 참조하는데 사용
    */
    const sectionsRef = useRef([]);

    //useEffect : 컴포넌트가 렌더링 후에 실행되는 부수 효과를 정의하는 코드
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        /* 
            gsap의 to 메소드를 사용하여 section 배열에 있는 요소들에 대한 가로 스크롤 애니메이션 설정
            sections 배열은 sectionsRef를 통해 각 포트폴리오 아이템 요소들을 참조
        */
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        /* 
            컴포넌트가 언마운트될 때(clean-up) 실행되는 함수를 정의
            scrollTween.kill()를 사용하여 스크롤 애니메이션 제거 이 함수를 통해 컴포넌트가 언마운트 될 때 메모리 누수 방지
        */
        return () => {
            scrollTween.kill();
        }

    },[]);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio
                </div>
                <div className="port__wrap">
                    {portfolioList.map((port, key) => (
                        <article 
                        className={`port__item p${key + 1}`} 
                        key={key}  
                        /* 
                            각 포트폴리오 아이템 요소에 대해 ref 속성을 사용하여 sectionsRef에 해당 요소를 저장
                            gsap의 to 메소드에서 애니메이션을 적용할 때 해당 요소들을 참조할 수 있음    
                        */
                        ref={(el) => (sectionsRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;