import Card from "./Card";

const Cards = ({data, name}) => {
    return data.map((item, index) => {
        return <Card key={index} {...item} name={name}/>;
    });
};

export default Cards;