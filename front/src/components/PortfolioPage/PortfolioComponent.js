import {Map} from './Map/Map';
import {Kvartal} from './Kvartal/Kvartal';
import {Parks} from './Parks/Parks';
import {Heart} from './Heart/Heart';
import {Scandinavia} from './Scandinavia/Scandinavia';
import {Fiolete} from './FioletePark/Foilete';

export const Portfolio = () => {
    return (
        <div className="container">
            <Map />
            <Kvartal />
            <Parks />
            <Heart />
            <Scandinavia />
            <Fiolete />
        </div>
    );
};
