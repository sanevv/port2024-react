import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/today'
import { Link } from 'react-router-dom'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Today = () => {
    return (
        <Main 
            title = "추천 영상"
            description="오늘의 추천 유튜브 영상입니다.">
            
            <section id='todayPage'>
                <h2>🥰 오늘의 추천 영상입니다.</h2>

                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={15}
                    navigation={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    autoplay={false}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    className='mySwiper'
                >
                {todayText.map((today, key) => (
                    <SwiperSlide>
                    <div className='today__inner' key={key}>
                        <div className='today__thumb play__icon'>
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className='today__text'>
                            <span className='today'>today!</span>
                            <h3 className='title'>
                                <Link to={`/channel/${today.page}`}>{today.title}</Link>
                            </h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>
                                    <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                                </span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </section>
        </Main>
    )
}

export default Today