import Image from "./Image";

const Images = ({data, name}) => {
    return data.map((item, index) => {
        return <Image key={index} {...item} name={name}/>;
    });
};

export default Images;