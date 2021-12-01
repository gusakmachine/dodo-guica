import {get} from "lodash";

export default function insertOnChangeEntryPoint(details, onChange, fields=[]) {
    for (let name of fields) {
        let detail = get(details, name);

        for (let value in detail) {
            detail[value]['onChange'] = (event) => {
                onChange(name, value, event);
            };
        }
    }
}