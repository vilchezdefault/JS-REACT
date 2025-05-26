import React from 'react'
import Logo from '../../assets/logo.png'
import mainPhoto from '../../assets/Calle de la amargura.jpg'
import photobook from '../../assets/graff univer.jpg'
import photobook2 from '../../assets/neur.jpg'


const Hero = () => {
  return (
    <section className='mt-36'>
      <div>
      <h1 className='text-center'>San José pinturas y más</h1>
      <img src={mainPhoto} 
           className="mx-auto w-full h-80 object-cover rounded-lg shadow-md"/>
      </div>

      <div className='grid grid-cols md:grid-cols-2'>

        {/*Logo, esta dentro de un grid*/}
        <div className='p-10'> 
          <img
              src={photobook}
              alt="IMG"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <p className="text-black text-lg max-w-md">
              <strong>Wildstyle: </strong>  Graffiti para buses de la UCR en San Pedro.
            </p>
        </div>
              <div className='p-11'>
                <img src={photobook2} 
                alt="IMG"
                className='w-64 h-64 object-cover rounded-lg ' />
              </div>
        <div>

          contenido
        </div>

      </div>
    </section>
  )
}

export default Hero
