import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "./Banner";
import { useMovie } from "../../helpers/movie-hooks";

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
                {detailedBannerData.map((bannerInfo) => (
                    <SwiperSlide key={bannerInfo.data.id}>
                        <Banner bannerInfo={bannerInfo.data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default BannerSwiper;
