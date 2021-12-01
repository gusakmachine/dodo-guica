import merge from "deepmerge";
import pourIn from "../../../utils/forms/snapshot/pourIn";
import {converters} from "../../../utils/forms/snapshot/converters";

//In work. Only for: DefaultPizza
export function createSnapshotReactions(schema, snapshot, selected, fields) {
    const {actions, branches} = schema;
    for (let key in actions) {
        if (!pourIn(selected, key))
            continue;

        let action = actions[key];

        for (let name in action) {
            let converter = converters[name];
            let instructions = actions[key][name];
            let branch = converter(snapshot, instructions, fields);

            snapshot = merge(snapshot, branch);
        }

        if (branches[key])
            snapshot = merge(snapshot, branches[key]);
    }

    return snapshot;
}