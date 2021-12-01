import merge from "deepmerge";
import {createHalvesBranch} from "./utils";
import {SIDES} from "../utils/Halves/Halves";
import {updatePrice} from "./shorts/updatePrice";
import {resetHalves} from "./halves/createHalvesProps";
import {REACTIONS} from "../utils/Intermediate/Intermediate";
import {createCardProps, resetCards} from "./cards/createCardsProps";

export function shorts(snapshot, intermediate) {
    const branch = createHalvesBranch(snapshot, intermediate);

    snapshot.halves = resetHalves();
    snapshot.cards = resetCards();

    return merge(snapshot, branch);
}

export function optional(side, snapshot, intermediate) {
    const schema = intermediate.halves.get(side);
    const branch = {
        shorts: {},
        cards: {},
    };

    intermediate.react(REACTIONS.optional, {
        schema: schema,
        side: side,
    });

    branch.shorts = updatePrice(snapshot.shorts, intermediate.micro_snpts.infos);
    branch.cards[side] = createCardProps(schema, intermediate);

    return merge(snapshot, branch);
}

export function defaultCase(snapshot, intermediate) {
    const {shorts} = snapshot;
    const branch = {
        shorts: {},
        cards: {},
    };

    intermediate.react(REACTIONS.doughs);
    branch.shorts = updatePrice(shorts, intermediate.micro_snpts.infos);

    if (intermediate.halves.get(SIDES.left))
        branch.cards.left = createCardProps(intermediate.halves.get(SIDES.left), intermediate);
    if (intermediate.halves.get(SIDES.right))
        branch.cards.right = createCardProps(intermediate.halves.get(SIDES.right), intermediate);

    return merge(snapshot, branch);
}