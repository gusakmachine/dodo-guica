export default class LocalisationService {
    static url = 'http://localhost:3000/localisation.json';

    static async getALlByLanguage(language) {
        const localisation = await fetch(LocalisationService.url);
        const result = await localisation.json();
        return result[language];
    }
}