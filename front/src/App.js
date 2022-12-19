import {Main} from './components/MainComponent/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import './style/nullstyle.css';
import './style/global.css';

function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
}

export default App;
