import React, {useEffect, useState} from "react";
import {LanguageResources} from "./utils/contexts";
import Menu from "./pages/Menu/Menu";
import LocalisationService from "./api/LocalisationService";
import {Provider} from "react-redux";
import store from "./store/store"

function initializeLanguage(setGlobalLanguage) {
    (async () => {
        const data = await LocalisationService.getALlByLanguage('ru');
        setGlobalLanguage(data);
    })();
}

function App() {
    const [globalLanguage, setGlobalLanguage] = useState();

    if (!globalLanguage) {
        initializeLanguage(setGlobalLanguage);
        return '';
    }

    return (
        <Provider store={store}>
            <LanguageResources.Provider value={globalLanguage}>
                <Menu />
            </LanguageResources.Provider>
        </Provider>
    );
}

export default App;