import {map} from "lodash";
import {useMemo} from "react";
import {strings, setResources} from "./localisation";
import styles from "./Pizzas.module.css";
import PizzaPreview from "./components/PizzaPreview/PizzaPreview";
import {WindowContext} from "./utils/contexts";
import {useDispatch, useSelector} from "react-redux";
import {get} from "../../store/reducers/pizzasReducer";
import useSetLanguage from "../../hooks/useSetLanguage/useSetLanguage";

const Pizzas = ({window, start, end}) => {
    const dispatch = useDispatch();
    const pizzas = useSelector(state => state.pizzas);
    const list = pizzas? map(pizzas, item =>
        <PizzaPreview key={item._id} schema={item}/>
    ) : 'Loading...';

    useSetLanguage(setResources);
    useMemo(() => {
        dispatch(get(start, end));
    }, [start, end]);

    return (
        <WindowContext.Provider value={window}>
            <section className={styles.container}>
                <h1 className={styles.title}>{strings.PIZZA}</h1>
                <div className={styles.list}>
                    {list}
                </div>
            </section>
        </WindowContext.Provider>
    );
}

export default Pizzas;