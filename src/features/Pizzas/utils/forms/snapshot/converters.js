import {isObject} from "lodash";
import {updateIngredientByModifier} from "../../ingridients";

function createInstructionBranch(snapshot, instructions, fields, callback) {
    let branch = {};

    for (let name of fields) {
        if (!isObject(snapshot[name]))
            continue;

        branch[name] = {};

        for (let key in instructions) {
            if (isObject(snapshot[name][key])) {
                branch[name][key] = callback(name, key);
            }
        }
    }

    return branch;
}

export const converters = {
    updateIngredientsByWeight(snapshot, instructions, fields) {
        return createInstructionBranch(snapshot, instructions, fields, (name, key) => {
            return {
                ...snapshot[name][key],
                ...updateIngredientByModifier(snapshot[name][key], instructions[key])
            };
        });
    },
    disableIngredient(snapshot, instructions, fields) {
        return createInstructionBranch(snapshot, instructions, fields, (name, key) => {
            return {
                ...snapshot[name][key],
                checked: !!instructions[key],
                disabled: instructions[key],
            };
        });
    },
};