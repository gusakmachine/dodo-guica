import {isObject} from "lodash";

export default function pourIn(selected, state) {
    const occurrences = [];
    let flags = format(state);
    let result = true;

    for (let name in selected) {
        let flag = selected[name];

        if (isObject(flag)) {
            for (let key in flag) {
                if (flags.includes(key)) {
                    occurrences.push(key);
                }
            }
        } else if (flags.includes(flag)) {
            occurrences.push(flag);
        }
    }

    for (let flag of flags) {
        if (!occurrences.includes(flag)) {
            result = false;
        }
    }

    return result;
}

function splitByUpperSymbols(string){
    return /(?=[A-Z])/g[Symbol.split](string);
}

function format(state) {
    const is = 'is';
    let array = splitByUpperSymbols(state);
    let flags = [];

    for (let item of array) {
        let lCItem = item.toLowerCase();

        if (lCItem !== is)
            flags.push(lCItem);
    }

    return flags
}