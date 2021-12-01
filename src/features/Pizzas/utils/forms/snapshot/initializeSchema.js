import {v4 as uuid} from "uuid";

export default function initializeSchema(schema) {
    let {details, presets} = schema;

    for (let name in details) {
        let preset = presets[name] || {};

        for (let value in details[name]) {
            details[name][value] = {
                ...details[name][value],
                ...preset[value],
                checked: false,
                id: uuid(),
            };
        }
    }

    return schema;
}