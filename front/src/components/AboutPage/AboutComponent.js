import {AboutComponent} from './AboutCompany/AboutComponent';
import {Sertificate} from './Sertificate/Sertificate';
import {Discount} from '../HomePage/Discount/Discount';
import {Article} from '../HomePage/Artical/Article';
import {Questions} from '../HomePage/Questions/Questions';
import {Reasons} from '../HomePage/Reasons/Reasons';
import {Works} from './Works/Works';
import {Partners} from './Partners/Partners';
import {OrderForm} from './OrderForm/OrderForm';
import {Delivery} from './Delivery/Delivery';
import {Garanty} from '../Garanty/Garanty';

export const About = () => {
    return (
        <div>
            <div className="container">
                <AboutComponent />
                <Sertificate />
            </div>
            <Discount />
            <div className="container">
                <Article />
                <Reasons />
            </div>
            <Questions />

            <div className="container">
                <Works />
                <Partners />
            </div>
            <OrderForm />

            <div className="container">
                <Delivery />
                <Garanty />
            </div>
        </div>
    );
};
