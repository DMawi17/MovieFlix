import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "./Banner";

import { useMovie } from "../../helpers/movie-hooks";
import { v4 } from "uuid";
import Header from "../../layout/Header";

const BannerSwiper = () => {
    const { detailedBannerData } = useMovie();

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                <Header />

                {detailedBannerData.map((bannerInfo) => (
                    <SwiperSlide key={v4()}>
                        <Banner bannerInfo={bannerInfo.data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default BannerSwiper;
