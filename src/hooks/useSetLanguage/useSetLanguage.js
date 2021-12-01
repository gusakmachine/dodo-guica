import {useContext, useMemo} from "react";
import {LanguageResources} from "../../utils/contexts";

export default function useSetLanguage(setResources) {
    const lr = useContext(LanguageResources);

    useMemo(() => {
        setResources(lr);
    }, [lr]);
}