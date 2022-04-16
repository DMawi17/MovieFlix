import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useMovie } from "../context/movie-hooks";
import Banner from "./Banner";

import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerSwiper() {
    const { bannerData } = useMovie();

    const tenBanners = bannerData
        .sort((a, b) => b.vote_average - a.vote_average)
        .filter((v, i) => i < 10);

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
                    <SwiperSlide key={v4()}>
                        <Banner {...banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
