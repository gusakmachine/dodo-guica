import {isBoolean} from "lodash";
import {Halves} from "../Halves/Halves";
import {MicroSnapshots} from "../MicroSnapshots/MicroSnapshots";
import {calculateHalvesInfo} from "../calculateHalvesInfo";

export class Intermediate {
    constructor(schema, pizzas) {
        this.schema = schema;
        this.pizzas = {};
        this.selected = null;
        this.info = {};
        this.halves = new Halves();

        for (let name in schema.details.shorts) {
            this.pizzas[name] = pizzas[name];
        }

        this.micro_snpts = new MicroSnapshots(this.pizzas);
    }

    update(name, payload) {
        switch (name) {
            case UPDATERS.shorts:
                this.halves.add(this.pizzas[payload]);
                break;
            case UPDATERS.snapshots:
                this.micro_snpts.initialize({
                    sizes: this.selected.sizes,
                    doughs: this.selected.doughs,
                });
                break;
            case UPDATERS.selected:
                this.selected = payload;
                break;
            case UPDATERS.info:
                this.info = calculateHalvesInfo(this);
                break;
        }
    }

    react(name, payload) {
        switch (name) {
            case REACTIONS.optional:
                const {schema, side} = payload;
                const {name, details} = schema;
                const {optional} = details;
                const selected = this.selected.cards[side];

                for (let value in optional) {
                    if (!isBoolean(selected[value])) {
                        selected[value] = false;
                    }
                }

                this.micro_snpts.update(name, {
                    optional: this.selected.cards[side]
                });
                break;
            case REACTIONS.doughs:
                this.micro_snpts.updateAll({
                    doughs: this.selected.doughs,
                });
                break;
        }
    }
}

export const UPDATERS = {
    shorts: 'shorts',
    snapshots: 'snapshots',
    selected: 'selected',
    info: 'info',
};

export const REACTIONS = {
    optional: 'optional',
    doughs: 'doughs',
};