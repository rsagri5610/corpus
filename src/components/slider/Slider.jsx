import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SliderCard from "./SliderCard";

const responsive = {
  30: { items: 1 }, // Extra small screens (phones)
  320: { items: 1 }, // Small phones
  480: { items: 2 }, // Medium phones
  768: { items: 3 }, // Tablets
  1024: { items: 4 }, // Small laptops
  1280: { items: 5 }, // Desktops
  1440: { items: 6 }, // Larger screens
  1920: { items: 7 }, // Extra-large screens
};

const data = [
  {
    id: 1,
    image: "https://bilkulonline.com/wp-content/uploads/2023/03/ICICI-logo.png",
  },
  {
    id: 2,
    image:
      "https://content3.jdmagicbox.com/comp/noida/d4/011pxx11.xx11.150128143751.s9d4/catalogue/kotak-mahindra-bank-ltd-noida-sector-62-noida-banks-trwhmh.jpg",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91g86GYPEmouJD3LiPGSYtYYW9XycFIu4pA&s",
  },
  {
    id: 4,
    image:
      "https://mayastickers.com/image/cache/catalog/mainimage/ccc/canara_bank_logo_stickers-550x550w.jpg",
  },
  {
    id: 5,
    image:
      "https://yt3.googleusercontent.com/NGhfS9Di_x-EquQdoHWnnCsws9C2ekE_qt5F6Cb9-Jllrecw86qwxr207V7Ffqv5bZAQYVU3e0k=s900-c-k-c0x00ffffff-no-rj",
  },
];

const items = data.map((item) => (
  <SliderCard  key={item.id} image={item.image} />
));

function Slider() {
  return (
    <div>
      <h2>Invest Through Us</h2>
      <div className="relative bg-gray-400 p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          infinite={true}
          autoPlay={true}
          autoPlayInterval={1000}
        />

        <div className="absolute top-40 left-[-2px] md:top-30 md:left-0 lg:top-40 lg:left-0 hover:bg-base-300">
          <button className="">
            <ChevronLeftIcon style={{ fontSize: "50px" }} />
          </button>
        </div>

        <div className="absolute top-40 right-0 md:top-30 lg:top-40 hover:bg-base-300">
          <button className="">
            
            <ChevronRightIcon style={{ fontSize: "50px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
