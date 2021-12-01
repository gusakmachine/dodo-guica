export default function findInputClassState(styles, {checked, disabled, readOnly}) {
    if (disabled)
        return styles.disabled;
    if (readOnly)
        return styles.readOnly;
    if (checked)
        return styles.isChecked;

    return styles.isNotChecked;
}