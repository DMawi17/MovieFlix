import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "./Banner";

const BannerSwiper = ({ tenBanners }) => {
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
                {tenBanners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <Banner {...banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default BannerSwiper;
