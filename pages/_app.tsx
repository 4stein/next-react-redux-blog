import {Provider} from 'react-redux';
import '../styles/main.sass'
import store from '../redux/store';


export default function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <>
                <Component {...pageProps} />
                <style jsx>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
            </>
        </Provider>
    )
}
