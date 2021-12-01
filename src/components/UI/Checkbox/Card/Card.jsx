import CardView from "./View";
import {useState} from "react";

const Card = (props) => {
    const [checked, setChecked] = useState(props.defaultChecked);
    const onChange = (e) => {
        if (props.onChange) {
            props.onChange(e);
        }
        setChecked(e.target.checked);
    };

    return <CardView
        {...props}
        onChange={onChange}
        checked={checked}
        name={props.name}
    />;
};

export default Card;