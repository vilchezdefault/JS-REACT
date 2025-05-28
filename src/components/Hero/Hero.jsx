import Logo from '../../assets/logo.png';
import mainPhoto from '../../assets/Calle de la amargura.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // <-- Faltaba esto
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/graff univer.jpg'
import img2 from '../../assets/neur.jpg'
import img3 from '../../assets/mirojaco.jpg'



const Hero = () => {
  return (
    <section className='mt-36 px-4'id='main' >
      {/* Hero Image and Title */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>
          San José Pinturas y más
        </h1>
        <img
          src={mainPhoto}
          alt="Calle de la Amargura"
          className="mx-auto w-full max-w-5xl h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Slider Section */}
      <section className='mt-16' id=''>
        <div className='max-w-6xl mx-auto'>
<Swiper
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className='pb-8'
>
  <SwiperSlide>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={img1}
        alt="Pintura exterior"
        className="w-full h-60 object-cover"
      />
      <div className="p-4 ">
        <h4 className="text-lg font-semibold">GraffitiWildStyle</h4>
        <p className='text-gray-600 mt-1'>Paradas UCR San Pedro</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={img2}
        alt="NEUR"
        className="w-full h-60 object-cover"
      />
      <div className="p-4 ">
        <h4 className="text-lg font-semibold">Acera infinta San José</h4>
        <p className='text-grey-600 mt-1'>NEUR KOD </p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={img3}
        alt="MiroJACO"
        className="w-full h-60 object-cover"
      />
      <div className="p-4 ">
        <h4 className="text-lg font-semibold">Jaco Costa Rica</h4>
        <p className='text-grey-600 mt-1'>Antiguo hotel en Jacó</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
        </div>
      </section>
</section>
  );
};

export default Hero;
