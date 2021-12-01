import merge from "deepmerge";
import {createHalvesViewerSideProps} from "./halves/createHalvesProps";
import {createCardProps} from "./cards/createCardsProps";
import * as HV from "../../../components/HalvesViewer/utils/defaultProps";
import * as HC from "../../../components/HalvesCards/utils/defaultProps";
import {SIDES} from "../utils/Halves/Halves";
import {createShortsProps} from "./shorts/createShortsProps";

export function createSideBranch(side, snapshot, intermediate) {
    const {halves} = intermediate;
    const schema = halves.get(side);
    const branch = {
        halves: { [side]: {}, },
        cards: { [side]: {}, },
    };

    if (schema) {
        if (snapshot.halves[side]?.name !== schema.name) {
            branch.halves[side] = createHalvesViewerSideProps(schema);
            branch.cards[side] = createCardProps(schema, intermediate);
        } else {
            branch.halves[side] = snapshot.halves[side];
            branch.cards[side] = snapshot.cards[side];
        }
    } else {
        branch.halves[side] = HV.getDefaultProps()[side];
        branch.cards[side] = HC.getDefaultProps()[side];
    }

    return branch;
}

export function createHalvesBranch(snapshot, intermediate) {
    return merge(
        createSideBranch(SIDES.left, snapshot, intermediate),
        createSideBranch(SIDES.right, snapshot, intermediate)
    );
}

export function createShortsBranch(snapshot, halves) {
    const {shorts} = snapshot;
    return {
        shorts: createShortsProps(shorts, halves.schemas)
    };
}