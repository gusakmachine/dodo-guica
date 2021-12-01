import React, {Suspense} from 'react';
import styles from "./FormRouter.module.css";
import CrossCloseButton from "../../../../components/Icons/CrossCloseButton/CrossCloseButton";

const Fallback = () => {
    return <></>;
}

const FormRouter = ({window, schema}) => {
    const {form} = schema;
    const Form = React.lazy(async () => await import(`../../forms/${form}/${form}`));

    return (
        <div className={`${styles.window}`}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <CrossCloseButton className={styles.closeButton} onClick={window.hide} />
                    <Suspense fallback={<Fallback/>}>
                        <Form window={window} schema={schema} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default FormRouter;