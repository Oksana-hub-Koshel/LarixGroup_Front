import {Route, Routes} from 'react-router-dom';
import {Home} from '../HomePage/HomeComponent';
import {Catalog} from '../CatalogPage/CatalogComponent';
import IndividualPage from '../Individual/Individual';
import {About} from '../AboutPage/AboutComponent';
import {Contacts} from '../ContactsPage/ContactsComponent';
import {Portfolio} from '../PortfolioPage/PortfolioComponent';
import {Header} from '../HeaderComponent/HeaderComponet';
import {Footer} from '../FooterComponents/Footer';
import {Privacy} from '../Pivacy/Privacy';
import {Categories} from '../CatalogPage/Catalog_Categories/Categories.jsx';
import {NoPage} from '../NoPage';
import {Basket} from '../BasketComponents/Basket';
import {Delivery} from '../DeliveryPage/Delivery';
import {Installation} from '../InstallationPage/Installation';
import {Project} from '../ProjectPage/Project';
import {Planting} from '../Planting/Planting';
import {Vacancy} from '../VacancyPage/Vacancy';
import {Info} from '../CatalogPage/Product_Info/Info';

export const Main = () => {
    return (
        <div>
            <Header />
            <Routes>

               <Route path="/" element={<Home />} />
               <Route path="/catalog" element={<Catalog />} />
               <Route path="/individual" element={<IndividualPage />} />
               <Route path="/about" element={<About />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/privacy" element={<Privacy />} />
               <Route path="/categories/*" element={<Categories />} />
               <Route path="*" element={<NoPage />} />
               <Route path="/Basket" element={<Basket />} />
               <Route path="/delivery" element={<Delivery />} />
               <Route path="/installation" element={<Installation />} />
               <Route path="/project" element={<Project />} />
               <Route path="/planting" element={<Planting />} />
               <Route path="/vacancy" element={<Vacancy />} />
               <Route path="/Ozelenenie" element={<Planting />} />
               <Route path="/info/:id" element={<Info />} />

            </Routes>
            <Footer />
        </div>
    );
};
