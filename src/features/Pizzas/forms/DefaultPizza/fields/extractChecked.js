import extractFromCheckbox from "../../../utils/forms/snapshot/extractFromCheckbox";
import extractFromRadio from "../../../utils/forms/snapshot/extractFromRadio";

export default function extractChecked(snapshot) {
    return {
        optional: extractFromCheckbox(snapshot.optional),
        sizes: extractFromRadio(snapshot.sizes),
        doughs: extractFromRadio(snapshot.doughs),
        additional: extractFromCheckbox(snapshot.additional),
    };
}