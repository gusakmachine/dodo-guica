import {sumTwoIngredients} from "../../../utils/ingridients";
import {GENERAL_INFO_VALUES} from "../../../utils/forms/snapshot/generalInfo";

export function calculateHalvesInfo(intermediate) {
    let {left, right} = intermediate.halves.schemas;
    return sumTwoIngredients(getInfo(left, intermediate), getInfo(right, intermediate));
}

function getInfo(half, intermediate) {
    if (half?.name) {
        if (intermediate.micro_snpts.infos[half.name]) {
            return intermediate.micro_snpts.infos[half.name];
        }
    }

    return {...GENERAL_INFO_VALUES};
}