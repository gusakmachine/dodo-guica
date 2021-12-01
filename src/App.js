import store from "./store/store"
import React, {useState} from "react";
import {LanguageResources} from "./utils/contexts";
import Menu from "./pages/Menu/Menu";
import {Provider} from "react-redux";
import initializeLanguage from "./utils/language/initializeLanguage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    const [globalLanguage, setGlobalLanguage] = useState();

    if (!globalLanguage) {
        initializeLanguage(setGlobalLanguage);
        return <span>Language Error</span>;
    }

    return (
        <Provider store={store}>
            <LanguageResources.Provider value={globalLanguage}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                    </Routes>
                </BrowserRouter>
            </LanguageResources.Provider>
        </Provider>
    );
}

export default App;