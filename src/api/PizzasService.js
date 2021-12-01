const url = `${process.env.REACT_APP_DOMAIN}/pizzas.json`;

export  async function getAll() {
    const pizzas = await fetch(url);
    return await pizzas.json();
}

export async function get(start=0, end) {
    const pizzas = await fetch(url + `?start=${start}&end=${end}`);
    return await pizzas.json();
}