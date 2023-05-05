import React from 'react'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { ProductSummary } from '../ProductSummary'
import { ProductSummaryAdmin } from '../ProductSummaryAdmin'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Shelf = ({title}) => {
  const { user, dishes } = useFoodExplorer()
  const admin = user?.isAdmin === 1 ? true : false

  const dishesCategory = dishes?.filter((dish) => dish.category.replace(' ', '') === title);
  return (
    <Container>
        <h2>{title}</h2>

        <div className='container-shelf'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px
            200: {
              width: 390,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            600: {
              width: 1100,
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {dishesCategory?.map((dishe) => (
            admin ? <SwiperSlide><ProductSummaryAdmin key={dishe.id} dishe={dishe}/></SwiperSlide> : <SwiperSlide><ProductSummary key={dishe.id} dishe={dishe}/></SwiperSlide>
          ))}
        </Swiper>
        </div>
    </Container>
  )
}
