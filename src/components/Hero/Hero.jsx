import Logo from '../../assets/logo.png';
import mainPhoto from '../../assets/Calle de la amargura.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // <-- Faltaba esto
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/graff univer.jpg'
import img2 from '../../assets/neur.jpg'
import img3 from '../../assets/mirojaco.jpg'
import img4 from '../../assets/mush.jpg'
import img5 from '../../assets/vandalCrew.png'
import img6 from '../../assets/cms.jpg'
import img7 from '../../assets/kidult.jpg'




const slides = [
  {
    src: img1,
    alt: 'Pintura exterior',
    title: 'GraffitiWildStyle',
    description: 'Paradas UCR San Pedro'
  },
  {
    src: img2,
    alt: 'NEUR',
    title: 'Acera infinita San José',
    description: 'NEUR KOD'
  },
  {
    src: img3,
    alt: 'MiroJACO',
    title: 'Jaco Costa Rica',
    description: 'Antiguo hotel en Jacó'
  },
  {
    src: img4,
    alt: 'MUSH',
    title: 'Mush',
    description: 'FungiArt'
  }
];



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
  slidesPerView={3}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className='pb-8'
>
{slides.map((slide, index) => (
  <SwiperSlide key={index}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={slide.src}
        alt={slide.alt}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold">{slide.title}</h4>
        <p className="text-gray-600 mt-1">{slide.description}</p>
      </div>
       
    </div>
  </SwiperSlide>
))}
</Swiper>
        </div>
      </section>

    <section id='crews'>

<h4 className="center-y10 p-5">Crews</h4>
  <p className="crews-description">
    Los crews son el núcleo del grafiti callejero en París. Más que grupos de artistas, son células activas con códigos propios, jerarquías internas y presencia territorial. Cada crew tiene su estilo, su historia y su forma de marcar el entorno.
  </p>

  <div className="crews-grid">
    <div className="crew-card">
      <img src={img5}/>
      <h5 className="crew-name">1UPCREW</h5>
      <p className="crew-info">
1UP (One United Power) is one of the most influential and 
recognized graffiti crews worldwide. Originally from Berlin,
Germany, it was founded in 2003 by a small group of friends
passionate about graffiti in the Kreuzberg district.
 </p>
    </div>
    <div className="crew-card">
<img src={img6}/>
      <h5 className="crew-name">Comanse mis sobras</h5>
      <p className="crew-info">
CMS (Cómanse Mis Sobras) is one of the most 
iconic graffiti crews in Venezuela and has
left a deep mark on the global urban scene.
Founded in 2004 in Caracas by RayOne, a pioneer
of the Caracas hip-hop movement and member 
of the group B.A.S.Y.C.O., the crew quickly grew 
with the addition of artists such as Tuker, Bain,
Saner, Senk, Jefo, Keso, Ira, Bus, Rose, Ins, and Coes.</p>
    </div>
    <div className="crew-card">
      <img src={img7}/>
      <h5 className="crew-name">KIDULT</h5>
      <p className="crew-info">
Kidult is a French graffiti artist known
for his provocative interventions on luxury stores, 
using urban art as a form of protest against the commercial 
appropriation of street art by fashion brands. His real identity 
remains anonymous; he presents himself as a graffiti activist who 
views this art form as an act of rebellion rather than a marketable product.</p>
    </div>
  </div>
         
        

    </section>



</section>
  );
};

export default Hero;
