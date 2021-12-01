import Radio from "../../../../../components/UI/Radio/collector";
import SliderView from "../../../../../components/UI/Radio/Slider/View";

const IngredientSliderRadios = ({data, name}) => {
    if (!data) {
        return <></>;
    }

    let children = [];
    let offset = 0;

    for (let key in data) {
        let item = data[key];

        if (item.checked)
            offset = children.length;

        children.push(
            <SliderView
                key={item.id}
                id={item.id}
                text={item.name}
                value={item.name}
                readOnly={!!item.readOnly}
                disabled={!!item.disabled}
                checked={!!item.checked}
                onChange={item.onChange}
                name={name}
            />
        );
    }

    return (
        <Radio.Slider offset={offset}>
            {children}
        </Radio.Slider>
    );
};

export default IngredientSliderRadios;