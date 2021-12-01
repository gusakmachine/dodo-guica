import merge from "deepmerge";

export default function createReactionBranch(snapshot, flags, actions, branches, converters, fields) {
    let branch = {};

    for (let key in flags) {
        if (!flags[key])
            continue;

        for (let name in actions[key]) {
            let converter = converters[name];
            let args = actions[key][name];

            if (converter) {
                branch = merge(branch, converter(snapshot, args, fields));
            }
        }

        if (branches[key])
            branch = merge(branch, branches[key]);
    }

    return branch;
}