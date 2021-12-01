export default function extractFromCheckbox(object) {
    let result = {};

    for (let key in object) {
        if (object[key].checked) {
            result[key] = true;
        }
    }

    return result;
}