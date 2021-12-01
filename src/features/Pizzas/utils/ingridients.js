import {GENERAL_INFO_VALUES} from "./forms/snapshot/generalInfo";

export function sumTwoIngredients(first, second) {
    let nut_val = {};

    for (let key in GENERAL_INFO_VALUES) {
        nut_val[key] = first[key] + second[key];
    }

    return nut_val;
}

export function updateIngredientByModifier(ingredient, modifier) {
    let nut_val = {};

    for (let key in GENERAL_INFO_VALUES) {
        nut_val[key] = Math.round(ingredient[key] * modifier);
    }

    return nut_val;
}