import { CardsDescription } from '../../componentes/cardsDescription/Index';
import { ImageGallery } from '../../componentes/imagengalery/Index';
import { ToyAnimation } from '../../componentes/toyAnimation/Index'
import './principal.css';
export const Home = () => {
    const images = Object.values(
        import.meta.globEager('../../public/imagesCarrousel/' +'*'+'.{png,jpg,jpeg,gif,svg,jfif}')
      );
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:5000,
        autoplay: true,
        useCSS: true,
        
      };
    return (
        <div className="home__body">
            <ImageGallery imagenes= {images} parrafo ="hola" settings={settings}/>
            <CardsDescription >
                <p className='parrafoCardsDescription'>Irazón es una alternativa atractiva y diferente de ocio y
                    entretenimiento para toda clase de colectivos y edades.
                    <br /><br />
                    Aportamos sugerentes parques itinerantes de diversión para niños y
                    adultos con propuestas de valor que dejan a un lado las nuevas tecnologías
                    apostando siempre por el juego tradicional, la cultura y la sencillez que, tristemente,
                    a lo largo de los años hemos ido perdiendo.</p>
            </CardsDescription >
            <ToyAnimation />
            <CardsDescription>
                <div>
                    <p className='parrafoCardsDescription'>Nuestros eventos están destinados a toda clase de colectivos y edades:
                        </p>
                    <ul>
                        <li>Asociaciones de personas discapacitadas.</li>
                        <li>Residencias de personas mayores y centros de día.</li>
                        <li>Ayuntamientos y fiestas patronales.</li>
                        <li>Asociaciones recreativas.</li>
                        <li>Jornadas culturales.</li>
                        <li>Mercados medievales.</li>
                        <li>Bodas, comuniones y cumpleaños.</li>
                        <li>Actividades escolares.</li>
                        <li>Campamentos.</li>
                        <li>Cobertura para otros eventos.</li>
                    </ul>
                </div>
            </CardsDescription>
        </div>
    )
}