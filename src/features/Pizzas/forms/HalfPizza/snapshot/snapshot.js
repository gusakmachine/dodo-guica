import {cloneDeep} from "lodash";
import merge from "deepmerge";
import * as HC from "../../../components/HalvesCards/utils/defaultProps";
import * as HV from "../../../components/HalvesViewer/utils/defaultProps";
import initializeSchema from "../../../utils/forms/snapshot/initializeSchema";
import createUpdatedFieldBranch from "../../../utils/forms/snapshot/createUpdatedFieldBranch";
import extractChecked from "../fields/extractChecked";
import {defaultCase, optional, shorts} from "./cases";
import {SIDES} from "../utils/Halves/Halves";
import {createShortsBranch} from "./utils";
import {updatePrice} from "./shorts/updatePrice";
import {UPDATERS} from "../utils/Intermediate/Intermediate";

export function initializeSnapshot(schema, intermediate) {
    const {details, presets} = initializeSchema(schema);
    const snapshot = merge(details, presets);

    intermediate.update(UPDATERS.selected, extractChecked(presets));
    intermediate.update(UPDATERS.snapshots);

    snapshot.shorts = merge(snapshot.shorts, updatePrice(snapshot.shorts, intermediate.micro_snpts.infos));
    snapshot.halves = HV.getDefaultProps();
    snapshot.cards = HC.getDefaultProps();
    snapshot.price = null;

    return snapshot;
}

export function updateSnapshotFields(name, value, event, intermediate, snapshot) {
    switch (name) {
        case 'shorts':
            snapshot = merge(
                snapshot,
                createShortsBranch(snapshot, intermediate.halves),
            );
            break;
        case 'left.optional':
            snapshot.cards.left = merge(
                snapshot.cards.left,
                createUpdatedFieldBranch(
                    snapshot.cards.left, 'optional', value, event
                )
            );
            break;
        case 'right.optional':
            snapshot.cards.right = merge(
                snapshot.cards.right,
                createUpdatedFieldBranch(
                    snapshot.cards.right, 'optional', value, event
                )
            );
            break;
        default:
            snapshot = merge(
                snapshot,
                createUpdatedFieldBranch(snapshot, name, value, event)
            );
    }

    return snapshot;
}

export function updateSnapshotReaction(name, value, intermediate, snapshot) {
    intermediate.update(UPDATERS.selected, extractChecked(snapshot));

    switch (name) {
        case 'shorts':
            snapshot = shorts(snapshot, intermediate);
            break;
        case 'left.optional':
            snapshot = optional(
                SIDES.left,
                snapshot,
                intermediate,
            );
            break;
        case 'right.optional':
            snapshot = optional(
                SIDES.right,
                snapshot,
                intermediate,
            );
            break;
        default:
            snapshot = defaultCase(snapshot, intermediate);
            break;
    }

    intermediate.update(UPDATERS.info);
    snapshot.price = intermediate.info.price;

    return snapshot;
}

export function createSnapshot(name, value, event, intermediate, snapshot) {
    snapshot = cloneDeep(snapshot);

    snapshot = updateSnapshotFields(
        name, value, event, intermediate, snapshot
    );

    snapshot = updateSnapshotReaction(
        name, value, intermediate, snapshot
    );

    return snapshot;
}