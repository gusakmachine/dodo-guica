export const url = 'http://localhost:3000/data.json';

export  async function getAll() {
    const pizzas = await fetch(url);
    return await pizzas.json();
}

export async function get(start=0, end) {
    const pizzas = await fetch(url + `?start=${start}&end=${end}`);
    return await pizzas.json();
}