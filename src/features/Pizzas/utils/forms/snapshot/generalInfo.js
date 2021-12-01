import {isObject} from "lodash";
import {sumTwoIngredients, updateIngredientByModifier} from "../../ingridients";

export const GENERAL_INFO_VALUES = {
    price: 0,
    energy_value: 0,
    fats: 0,
    protein: 0,
    carbohydrates: 0,
    weight: 0,
};

export function createGeneralInfo(selected, pizza, snapshot) {
    let total_nut_val = {...GENERAL_INFO_VALUES};
    let base_weight = 0;

    if (snapshot.sizes[selected.sizes])
        base_weight += snapshot.sizes[selected.sizes].weight;

    if (snapshot.doughs[selected.doughs])
        base_weight += snapshot.doughs[selected.doughs].weight;

    total_nut_val = sumTwoIngredients(
        total_nut_val, updateIngredientByModifier(pizza, base_weight)
    );

    for (let name in selected) {
        if (!isObject(selected[name]))
            continue;

        for (let value in selected[name]) {
            if (selected[name][value]) {
                total_nut_val = sumTwoIngredients(total_nut_val, snapshot[name][value]);
            }
        }
    }

    return total_nut_val;
}