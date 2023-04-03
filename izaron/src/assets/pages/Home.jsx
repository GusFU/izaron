import { CardsDescription } from '../../componentes/cardsDescription/Index';
import { ImageGallery } from '../../componentes/imagengalery/Index';

export const Home = ()=>{

    return (
        <div className="home__body">
            <ImageGallery />
        <CardsDescription />
        </div>
    )
}