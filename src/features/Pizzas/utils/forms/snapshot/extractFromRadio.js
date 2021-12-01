export default function extractFromRadio(object) {
    for (let key in object)
        if (object[key].checked)
            return key;
    return null;
}