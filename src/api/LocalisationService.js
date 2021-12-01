const url = `${process.env.REACT_APP_DOMAIN}/localisation.json`;

export async function getALlByLanguage(language) {
    const localisation = await fetch(url);
    const result = await localisation.json();
    return result[language];
}