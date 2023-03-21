import Link from "next/link";
import Image from "next/image";
import add from "../../public/images/add.png";
import classes from "./AddBtn.module.css";

export default function AddBtn(props) {
    return (
        <div>
            <button className={classes.button} onClick={props.handleClick}>
                <Image
                    width={props.width}
                    height={props.height}
                    src={add}
                    alt="add-btn"
                />
                <h5 style={{ marginTop: 10 }}>
                    ADD A NEW {props.item.toUpperCase()}
                </h5>
            </button>
        </div>
    );
}
