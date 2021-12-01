const url = `${process.env.REACT_APP_DOMAIN}/header.json`;

export  async function getAll() {
    const data = await fetch(url);
    return await data.json();
}