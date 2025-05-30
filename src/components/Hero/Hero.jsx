import Logo from '../../assets/logo.png';
import mainPhoto from '../../assets/Calle de la amargura.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import img1 from '../../assets/graff univer.jpg';
import img2 from '../../assets/neur.jpg';
import img3 from '../../assets/mirojaco.jpg';
import img4 from '../../assets/mush.jpg';
import img5 from '../../assets/vandalCrew.png';
import img6 from '../../assets/cms.jpg';
import img7 from '../../assets/kidult.jpg';



const slides = [
  { src: img1, alt: 'Pintura exterior', title: 'GraffitiWildStyle', description: 'Paradas UCR San Pedro' },
  { src: img2, alt: 'NEUR', title: 'Acera infinita San José', description: 'NEUR KOD' },
  { src: img3, alt: 'MiroJACO', title: 'Jaco Costa Rica', description: 'Antiguo hotel en Jacó' },
  { src: img4, alt: 'MUSH', title: 'Mush', description: 'FungiArt' },
];

const Hero = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    

    <section className='mt-36 px-4' id='main'>
      {/* Hero Image and Title */}
      <div className='text-center max-w-6xl mx-auto mb-20'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>
          San José Pinturas y más
        </h1>
        <p className='text-center mb-8'>
          San José Pinturas y Más es un proyecto que nace con el objetivo de practicar
          desarrollo web utilizando tecnologías que no había explorado antes.
          Las tecnologías empleadas en este proyecto son JavaScript y React.

          El proyecto se basa en recolectar y documentar arte urbano ubicado
          en el centro de San José y sus alrededores.

          ¿Por qué elegí este tema?
          Aprender a veces puede volverse tedioso,
          por lo que busco maneras de relacionarlo con
          actividades que me apasionan. En este caso,
          el arte urbano me permite combinar el aprendizaje
          técnico con algo que disfruto observar y explorar.
        </p>
        <img
          src={mainPhoto}
          alt="Calle de la Amargura"
          className="mx-auto w-full max-w-5xl h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Sección de Writers */}
      <section id='writers' className='mb-20'>
        <div className='max-w-6xl mx-auto text-center'>
          <h4 className='text-2xl font-semibold mb-2'>Graffiti bomber</h4>
          <h5 className='text-lg text-gray-600'>¿Qué es?</h5>
          <p>
            Escribe solo. No tiene crew.
            Pinta ilegal. Sin permiso, sin aviso.
            Sale por su cuenta, busca espacio, marca nombre.
            No le importa el arte, le importa estar en la calle.
            Su objetivo: estar en todos lados. Rápido, sucio, constante.
            No rinde cuentas. No busca aprobación.
            Es calle pura. Es nombre repetido. Es vandalismo directo.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className='mb-20'>
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
                    onClick={() => setSelectedImage(slide.src)}
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

        {selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="relative">
      <button
        className="absolute top-2 right-2 text-white text-2xl"
        onClick={() => setSelectedImage(null)}
      >
        &times;
      </button>
      <img
        src={selectedImage}
        alt="Vista completa"
        className="max-w-full max-h-screen rounded"
      />
    </div>
  </div>
)}

      </section>

      {/* Sección de Crews */}
      <section id='crews' className='mb-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <h4 className="text-2xl font-semibold text-center mb-4">Crews</h4>
          <p className="text-center text-gray-600 mb-10">
            Un crew es un grupo de escritores que pintan juntos. Se apoyan, se cuidan y se representan.
            No es para lucirse, es para marcar, tomar calle y dejar claro quién manda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Crew 1 */}
            <div className="crew-card bg-white p-4 rounded-lg shadow-md">
              <img src={img5} alt="1UPCREW" className="w-full h-48 object-cover rounded-md mb-4" />
              <h5 className="crew-name text-xl font-semibold mb-2">1UPCREW</h5>
              <p className="crew-info text-gray-600 text-sm">
                1UP (One United Power) is one of the most influential...
              </p>
            </div>

            {/* Crew 2 */}
            <div className="crew-card bg-white p-4 rounded-lg shadow-md">
              <img src={img6} alt="CMS" className="w-full h-48 object-cover rounded-md mb-4" />
              <h5 className="crew-name text-xl font-semibold mb-2">Comanse mis sobras</h5>
              <p className="crew-info text-gray-600 text-sm">
                CMS (Cómanse Mis Sobras) is one of the most iconic graffiti crews...
              </p>
            </div>

            {/* Crew 3 */}
            <div className="crew-card bg-white p-4 rounded-lg shadow-md">
              <img src={img7} alt="KIDULT" className="w-full h-48 object-cover rounded-md mb-4" />
              <h5 className="crew-name text-xl font-semibold mb-2">KIDULT</h5>
              <p className="crew-info text-gray-600 text-sm">
                Kidult is a French graffiti artist known for his provocative...
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
  
};

export default Hero;
