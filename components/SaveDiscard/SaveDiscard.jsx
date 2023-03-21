import Button from "react-bootstrap/Button";
import classes from "./SaveDiscard.module.css";

export default function SaveDiscard(props) {
    return (
        <div className={classes.btns}>
            <Button
                className={classes.btn}
                variant="success"
                onClick={props.onClickSave}
            >
                SAVE CHANGES
            </Button>
            <Button
                onClick={props.onClickDiscard}
                className={classes.btn}
                variant="danger"
            >
                DISCARD CHANGES
            </Button>
        </div>
    );
}
