import initializeSchema from "../../../../utils/forms/snapshot/initializeSchema";
import merge from "deepmerge";
import {createSnapshotReactions} from "../createSnapshotsInfo";
import extractChecked from "../../../DefaultPizza/fields/extractChecked";
import {createGeneralInfo} from "../../../../utils/forms/snapshot/generalInfo";
import createCheckedBranch from "../../../../utils/forms/snapshot/createCheckedBranch";

//In work. Only for: DefaultPizza
export class MicroSnapshots {
    constructor(schemas) {
        this.schemas = schemas;
        this.selected = {};
        this.infos = {};
        this.snapshots = {};
        this.fields = ['optional'];
    }

    initialize(parent_selected) {
        for (let name in this.schemas) {
            const schema = this.schemas[name];
            const {pizza, details, presets} = initializeSchema(schema);
            const selected = extractChecked(presets);
            const snapshot = createSnapshotReactions(
                schema, merge(
                    details, merge(presets, createCheckedBranch(details, parent_selected, false))
                ), selected, this.fields,
            );

            this.selected[name] = selected;
            this.infos[name] = createGeneralInfo(selected, pizza, snapshot);
            this.snapshots[name] = snapshot;
        }
    }

    update(name, parent_selected) {
        const schema = this.schemas[name];
        const {pizza, details} = initializeSchema(schema);
        const selected = merge(this.selected[name], parent_selected);
        const snapshot = createSnapshotReactions(
            schema, merge(
                details, createCheckedBranch(details, parent_selected, false)
            ), selected, this.fields,
        );

        this.selected[name] = selected;
        this.infos[name] = createGeneralInfo(selected, pizza, snapshot);
        this.snapshots[name] = snapshot;
    }

    updateAll(parent_selected) {
        for (let name in this.schemas) {
            this.update(name, parent_selected);
        }
    }
}