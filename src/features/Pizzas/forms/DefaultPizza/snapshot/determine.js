export function determine(selected) {
    let middle = selected.sizes === 'middle';
    let big = selected.sizes === 'big';
    let traditional = selected.doughs === 'traditional';
    let thin = selected.doughs === 'thin';

    return {
        isSmall: selected.sizes === 'small',
        isMiddle: middle,
        isBig: big,
        isThin: thin,
        isMiddleTraditional: middle && traditional,
        isMiddleThin: middle && thin,
        isBigTraditional: big && traditional,
        isBigThin: big && thin,
    };
}