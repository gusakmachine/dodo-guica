import {useState} from "react";
import View from "../Text/View";

const Image = (props) => {
    const [checked, setChecked] = useState(props.defaultChecked);
    const onChange = (e) => {
        if (props.onChange) {
            props.onChange(e);
        }
        setChecked(e.target.checked);
    };

    return <View
        {...props}
        onChange={onChange}
        defaultChecked={checked}
        name={props.name}
    />;
};

export default Image;