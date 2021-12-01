export function formatText(text, index) {
    text = text.toLowerCase();

    if (index === 0) {
        text = text.charAt(0).toUpperCase() + text.slice(1);
    }

    return text;
}

export function addComa(index, array) {
    if (index < array.length - 1) {
        return <span>,&nbsp;</span>;
    }

    return '';
}