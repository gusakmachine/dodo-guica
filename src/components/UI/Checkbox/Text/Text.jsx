import {useState} from "react";
import View from "./View";

const Text = (props) => {
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
        checked={checked}
        name={props.name}
    />;
};

export default Text;