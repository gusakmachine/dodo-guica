import {getALlByLanguage} from "../../api/LocalisationService";

export default function initializeLanguage(setGlobalLanguage) {
    (async () => {
        const data = await getALlByLanguage('ru');
        setGlobalLanguage(data);
    })();
}