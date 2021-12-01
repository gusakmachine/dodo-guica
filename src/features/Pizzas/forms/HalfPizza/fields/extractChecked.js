import extractFromCheckbox from "../../../utils/forms/snapshot/extractFromCheckbox";
import extractFromRadio from "../../../utils/forms/snapshot/extractFromRadio";

export default function extractChecked(snapshot) {
    return {
        shorts: extractFromCheckbox(snapshot.shorts),
        cards: {
            left: extractFromCheckbox(snapshot.cards?.left?.optional) || {},
            right: extractFromCheckbox(snapshot.cards?.right?.optional) || {},
        },
        sizes: extractFromRadio(snapshot.sizes),
        doughs: extractFromRadio(snapshot.doughs)
    };
}