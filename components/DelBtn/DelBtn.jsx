import Link from "next/link";
import Image from "next/image";
import del from "../../public/images/delete.png";
import classes from "./DelBtn.module.css";

export default function DelBtn(props) {
    return (
        <div>
            <button
                onClick={props.onDel}
                href="https://github.com/SarveshPatil46"
                className={classes.btn}
            >
                <Image
                    width={props.width}
                    height={props.height}
                    src={del}
                    alt="del-btn"
                />
            </button>
        </div>
    );
}
