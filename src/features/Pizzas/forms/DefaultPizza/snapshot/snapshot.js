import merge from "deepmerge";
import {strings} from "../../../localisation";
import {determine} from "./determine";
import extractChecked from "../fields/extractChecked";
import {VIEWER_SIZES} from "../../../components/PizzaViewer/PizzaViewer";
import {createGeneralInfo} from "../../../utils/forms/snapshot/generalInfo";
import initializeSchema from "../../../utils/forms/snapshot/initializeSchema";
import createCheckedBranch from "../../../utils/forms/snapshot/createCheckedBranch";
import createReactionBranch from "../../../utils/forms/snapshot/createReactionBranch";
import {converters} from "../../../utils/forms/snapshot/converters";

export function createViewers(schema, old_snapshot, snapshot) {
    let {pizza} = schema;
    let selected = extractChecked(old_snapshot);
    let general_info = createGeneralInfo(selected, pizza, snapshot);

    snapshot.viewer = {
        src: snapshot.viewer.src,
        title: pizza.title,
        size: VIEWER_SIZES[selected.sizes],
    };
    snapshot.header = {
        title: pizza.title,
        weight: general_info.weight,
        dough: snapshot.doughs[selected.doughs].name.toLowerCase() + ' ' + strings.DOUGH,
        diameter: snapshot.sizes[selected.sizes].diameter,
    };
    snapshot.info = {
        energy_value: general_info.energy_value,
        fats: general_info.fats,
        protein: general_info.protein,
        carbohydrates: general_info.carbohydrates,
        weight: general_info.weight,
        diameter: snapshot.sizes[selected.sizes].diameter,
    };
    snapshot.price = general_info.price;

    return snapshot;
}

export function createFields(schema, old_snapshot) {
    let {details, branches, actions} = schema;
    let selected = extractChecked(old_snapshot);
    let flags = determine(selected);
    let checked_branch = merge(details, createCheckedBranch(details, selected));
    let fields = ['optional', 'additional'];

    return merge(checked_branch, createReactionBranch(
        checked_branch, flags, actions, branches, converters, fields
    ));
}

export function createSnapshot(schema, old_snapshot) {
    return createViewers(
        schema, old_snapshot, createFields(schema, old_snapshot)
    );
}

export function initializeSnapshot(schema) {
    let {details, presets} = initializeSchema(schema);
    return createSnapshot(schema, merge(details, presets));
}