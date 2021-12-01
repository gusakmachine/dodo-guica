import {has} from "lodash";

export default function createCheckedBranch(map, selected, defineAll=true) {
    let branch = {};

    for (let name in map) {
        branch[name] = {};

        for (let value in map[name]) {
            branch[name][value] = {};

            if (typeof selected[name] === 'object')
                branch[name][value]['checked'] = !!selected[name][value];
            else {
                if (has(selected, name) || defineAll) {
                    branch[name][value]['checked'] = selected[name] === value;
                }
            }
        }
    }

    return branch;
}