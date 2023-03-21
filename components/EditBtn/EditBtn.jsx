import Image from "next/image";
import edit from "../../public/images/edit2.png";
import Button from "react-bootstrap/Button";
import classes from "./EditBtn.module.css";

export default function EditBtn(props) {
    return (
        <div>
            <button className={classes.button} onClick={props.handleShow}>
                <Image
                    width={props.width}
                    height={props.height}
                    src={edit}
                    alt="edit-btn"
                />
            </button>
        </div>
    );
}
