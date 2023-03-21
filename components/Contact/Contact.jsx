import classes from "./Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function Contact(props) {
    // const [showDialogEdit, setShowDialogEdit] = useState(false);
    // const handleCloseEdit = () => setShowDialogEdit(false);
    // const handleShowEdit = () => setShowDialogEdit(true);

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const githubLogo =
        "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/githubLogo_gtmev3.png";
    const instagramLogo =
        "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/instagramLogo_fyozok.png";
    const linkedinLogo =
        "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/linkedinLogo_aewtwd.png";
    const facebookLogo =
        "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/facebookLogo_njnxd6.png";
    const twitterLogo =
        "https://res.cloudinary.com/sarveshp46/image/upload/v1666794177/portfolio/twitterLogo_zdffgg.png";

    const [showDialogEdit, setShowDialogEdit] = useState({
        showModal: false,
        activeModal: null,
    });

    const handleCloseEdit = () => {
        // setUpdatedSkills(skills);
        setShowDialogEdit({
            showModal: false,
            activeModal: null,
        });
    };

    const handleShowEdit = (e, index) => {
        setShowDialogEdit({
            showModal: true,
            activeModal: index,
        });
    };

    const [handles, setHandles] = useState({
        allHandles: props.data.handles,
    });

    const changedHandles = handles;

    const handleChange = (e, index) => {
        if (e.target.id === "name") {
            changedHandles.allHandles[index].name = e.target.value;
            if (changedHandles.allHandles[index].name === "github") {
                changedHandles.allHandles[index].img = githubLogo;
            } else if (changedHandles.allHandles[index].name === "instagram") {
                changedHandles.allHandles[index].img = instagramLogo;
            } else if (changedHandles.allHandles[index].name === "linkedin") {
                changedHandles.allHandles[index].img = linkedinLogo;
            } else if (changedHandles.allHandles[index].name === "facebook") {
                changedHandles.allHandles[index].img = facebookLogo;
            } else if (changedHandles.allHandles[index].name === "twitter") {
                changedHandles.allHandles[index].img = twitterLogo;
            }
        } else if (e.target.id === "link") {
            changedHandles.allHandles[index].link = e.target.value;
        }
        setHandles({ allHandles: changedHandles.allHandles });
        // props.data.handles = handles.allHandles;
    };

    const handleDelete = (e, index) => {
        const afterDelete = handles.allHandles.filter(function (el) {
            return el._id !== handles.allHandles[index]._id;
        });
        setHandles({ allHandles: afterDelete });
        // props.data.handles = handles.allHandles;
    };

    const newHandle = {
        _id: "",
        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/githubLogo_gtmev3.png",
        link: "https://github.com/SarveshPatil29",
        name: "Github",
    };

    const handleClickAdd = () => {
        const addedHandleArray = handles.allHandles;
        newHandle._id = uuidv4();
        addedHandleArray.push(newHandle);
        setHandles({ allHandles: addedHandleArray });
        // props.data.handles = handles.allHandles;
    };

    useEffect(() => {
        props.data.handles = handles.allHandles;
    }, [handles]);

    const handlesList = handles.allHandles.map((item, index) => (
        <div key={item._id} className={classes.logo}>
            <div className={classes.editBtn}>
                {props.isEdit && (
                    <div>
                        <EditBtn
                            width={30}
                            height={30}
                            // handleShow={handleShowEdit}
                            handleShow={(e) => handleShowEdit(e, index)}
                        />
                        <Modal
                            backdrop="static"
                            // show={showDialogEdit}
                            show={showDialogEdit.activeModal === index}
                            onHide={handleCloseEdit}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT HANDLE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Select
                                        className="mb-3"
                                        aria-label="Default select example"
                                        id="name"
                                        value={item.name}
                                        onChange={(e) => {
                                            handleChange(e, index);
                                        }}
                                    >
                                        <option>SELECT HANDLE</option>
                                        <option value="github">GITHUB</option>
                                        <option value="linkedin">
                                            LINKEDIN
                                        </option>
                                        <option value="twitter">TWITTER</option>
                                        <option value="instagram">
                                            INSTAGRAM
                                        </option>
                                        <option value="facebook">
                                            FACEBOOK
                                        </option>
                                    </Form.Select>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="PROFILE LINK"
                                            id="link"
                                            value={item.link}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleCloseEdit}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </div>
            <div className={classes.delBtn}>
                {props.isEdit && (
                    <DelBtn
                        onDel={(e) => {
                            handleDelete(e, index);
                        }}
                        width={25}
                        height={25}
                    />
                )}
            </div>
            <button className={classes.handleLogos}>
                <Link href={item.link}>
                    <a target="_blank">
                        <Image
                            width={50}
                            height={50}
                            className={classes.githubLogo}
                            src={item.img}
                            alt={item.name}
                        />
                    </a>
                </Link>
            </button>
        </div>
    ));

    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const handleOnChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await axios
            .post(`${props.domainUrl}/api/mail`, {
                formData: inputs,
                toEmail: props.data.email,
            })
            .then(function (response) {
                console.log(response);
                alert("Successfully sent the message");
            })
            .catch(function (error) {
                console.log(error);
            });

        setInputs({
            fullname: "",
            email: "",
            message: "",
        });
    };

    return (
        <section>
            <br id="contact" />
            <h1 id="contact" className={classes.header}>
                CONTACT
            </h1>
            <Form onSubmit={handleSubmit} className={classes.form}>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="fullname"
                        name="fullname"
                        onChange={handleOnChange}
                        required
                        value={inputs.fullname}
                        type="text"
                        placeholder="ENTER YOUR NAME"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        id="email"
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                        placeholder="ENTER YOUR EMAIL"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="message"
                        name="message"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                        as="textarea"
                        rows="5"
                        placeholder="ENTER YOUR MESSAGE"
                    />
                </Form.Group>
                <div className={classes.submitBtn}>
                    <Button
                        className={classes.btn}
                        variant="dark"
                        type="submit"
                    >
                        SEND MESSAGE
                    </Button>
                </div>
            </Form>

            <div className={classes.logoDiv}>
                <section className={classes.logos}>{handlesList}</section>
            </div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"handle"}
                        handleClick={handleClickAdd}
                        // handleShow={handleShowAdd}
                    />
                    {/* <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD HANDLE</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Select
                                    className="mb-3"
                                    aria-label="Default select example"
                                >
                                    <option>SELECT HANDLE</option>
                                    <option value="github">GITHUB</option>
                                    <option value="linkedin">LINKEDIN</option>
                                    <option value="twitter">TWITTER</option>
                                    <option value="instagram">INSTAGRAM</option>
                                    <option value="facebook">FACEBOOK</option>
                                </Form.Select>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="PROFILE LINK"
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={handleCloseAdd}
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                onClick={handleCloseAdd}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                </div>
            )}
        </section>
    );
}
