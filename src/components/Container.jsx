import React from 'react';

import 'swiper/css'; // node_modules 불러오는 swipercss
import 'swiper/css/pagination'; // node_modules 불러오는 pagination
import 'swiper/css/navigation'; // node_modules 불러오는 navigation
import '../styles/swiperCustom.css'; // Swiper 슬라이더를 개인으로 수정하려고 만든 css

import { Swiper, SwiperSlide } from 'swiper/react'; // React용 Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // 모듈 경로 수정

function Container(props) {
   return (
      <>
         <section className='container'>
            <Swiper className=''
               modules={[Autoplay, Pagination, Navigation]} // 사용하는 모듈 추가
               autoplay={{
                  delay: 3000, // 3초마다 슬라이드 변경
                  disableOnInteraction: false, // 사용자 조작 시 자동 재생 유지
               }}
               loop={true} // 무한 반복
               spaceBetween={50} // 슬라이드 간 간격
               slidesPerView={1} // 한 화면에 보여줄 슬라이드 개수
               pagination={{ clickable: true }} // 페이지네이션 옵션
               navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
               }} // 네비게이션 화살표 추가
               breakpoints={{ 
                  640: { slidesPerView: 3, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 40 },
                  1024: { slidesPerView: 1, spaceBetween: 50 },
               }} // 반응형
            >
               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_1.jpg)"}}></SwiperSlide>

               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_2.jpg)"}}></SwiperSlide>

               <SwiperSlide style={{backgroundImage:"url(./images/main_slide_3.jpg)"}}></SwiperSlide>

               {/* 사용자 정의 버튼 */}
               <div class="swiper-button-prev">
                  <div class="material-icons">arrow_back</div>
               </div>
               <div class="swiper-button-next">
                  <div class="material-icons">arrow_forward</div>
               </div>
            </Swiper>
         </section>
      </>
   );
}

export default Container;