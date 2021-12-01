export default function createUpdatedFieldBranch(source, name, value, event) {
    let field = event.target;
    let branch = {
        [name]: {
            [value]: {

            }
        }
    };

    switch (field.type) {
        case 'radio':
            for (let key in source[name]) {
                branch[name][key] = {
                    checked: false
                };
            }

            branch[name][value]['checked'] = field.checked;
            break;
        case 'checkbox':
            branch[name][value]['checked'] = field.checked;
            break;
        default:
            branch[name][value]['value'] = field.value;
            break;
    }

    return branch;
}