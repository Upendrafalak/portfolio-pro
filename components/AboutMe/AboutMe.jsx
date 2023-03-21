import classes from "./AboutMe.module.css";
import EditBtn from "../EditBtn/EditBtn";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useReducer } from "react";

function AboutMe(props) {
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
    const [showDialogIntro, setShowDialogIntro] = useState(false);
    const handleCloseIntro = () => {
        // setUpdatedAbout(about);
        setShowDialogIntro(false);
    };
    // const handleSaveIntro = () => {
    //     setAbout(updatedAbout);
    //     setShowDialogIntro(false);
    // };
    const handleShowIntro = () => setShowDialogIntro(true);

    const [showDialogAbout, setShowDialogAbout] = useState(false);
    const handleCloseAbout = () => {
        // setUpdatedAbout(about);
        setShowDialogAbout(false);
    };
    // const handleSaveAbout = () => {
    //     setAbout(updatedAbout);
    //     setShowDialogAbout(false);
    // };
    const handleShowAbout = () => setShowDialogAbout(true);

    const [about, setAbout] = useState({
        name: props.data.name.toUpperCase(),
        introText: props.data.intro.toUpperCase(),
        introImg: props.data.introImg,
        aboutMeText: props.data.aboutMe.toUpperCase(),
        aboutMeImg: props.data.aboutMeImg,
    });

    // const [updatedAbout, setUpdatedAbout] = useState(about);

    const handleChange = (e) => {
        setAbout((prevAbout) => {
            return {
                ...prevAbout,
                [e.target.name]: e.target.value.toUpperCase(),
            };
        });
        props.data.name = about.name;
        props.data.intro = about.introText;
        // props.data.introImg = about.introImg;
        props.data.aboutMe = about.aboutMeText;
        // props.data.aboutMeImg = about.aboutMeImg;
    };

    const handleSubmitIntro = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "introImg"
        );
        if (fileInput.files.length) {
            const formData = new FormData();

            for (const file of fileInput.files) {
                formData.append("file", file);
            }

            formData.append("upload_preset", "portfolio-uploads");

            const data = await fetch(
                "https://api.cloudinary.com/v1_1/sarveshp46/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            ).then((r) => r.json());

            let newAbout = about;
            newAbout.introImg = data.secure_url;
            setAbout(newAbout);
            props.data.introImg = about.introImg;
            forceUpdate();
        }
    };

    const handleSubmitAbout = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "aboutMeImg"
        );
        if (fileInput.files.length) {
            const formData = new FormData();

            for (const file of fileInput.files) {
                formData.append("file", file);
            }

            formData.append("upload_preset", "portfolio-uploads");

            const data = await fetch(
                "https://api.cloudinary.com/v1_1/sarveshp46/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            ).then((r) => r.json());
            console.log(data.secure_url);

            let newAbout = about;
            newAbout.aboutMeImg = data.secure_url;
            setAbout(newAbout);
            props.data.aboutMeImg = about.aboutMeImg;
            forceUpdate();
        }
    };
    return (
        <div>
            <section style={{ paddingTop: "2%" }} className={classes.intro}>
                <div className={classes.introText}>
                    <p className="fw-bold">THIS IS ME</p>
                    <p className="fw-bold fs-2">{about.name}</p>
                    <p>{about.introText}</p>
                </div>
                <div className={classes.introImg}>
                    <Image
                        src={about.introImg}
                        alt="Profile Image"
                        key={Math.floor(Math.random() * 100)}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={classes.editBtnIntro}>
                    {props.isEdit && (
                        <div>
                            <EditBtn
                                width={50}
                                height={50}
                                handleShow={handleShowIntro}
                            />
                            <Modal
                                show={showDialogIntro}
                                onHide={handleCloseIntro}
                                backdrop="static"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>EDIT INTRO</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmitIntro}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="NAME"
                                                name="name"
                                                value={about.name}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="10"
                                                placeholder="INTRODUCTION"
                                                name="introText"
                                                value={about.introText}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>IMAGE</Form.Label>
                                            <Form.Control
                                                name="introImg"
                                                type="file"
                                            />
                                        </Form.Group>
                                        <Modal.Footer>
                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                onClick={handleCloseIntro}
                                            >
                                                Save
                                            </Button>
                                            {/* <Button
                                        type="submit"
                                        variant="primary"
                                        onClick={handleSaveIntro}
                                    >
                                        Save Changes
                                    </Button> */}
                                        </Modal.Footer>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )}
                </div>
            </section>
            <section className={classes.aboutMe}>
                <div className={classes.aboutMeImg}>
                    <Image
                        src={about.aboutMeImg}
                        alt="Profile Image"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={classes.aboutMeText}>
                    <p className="fw-bold">ABOUT ME</p>
                    <p>{about.aboutMeText}</p>
                </div>
                <div className={classes.editBtnAbout}>
                    {props.isEdit && (
                        <div>
                            <EditBtn
                                width={50}
                                height={50}
                                handleShow={handleShowAbout}
                            />
                            <Modal
                                show={showDialogAbout}
                                onHide={handleCloseAbout}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>EDIT ABOUT ME</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmitAbout}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                rows="10"
                                                placeholder="ABOUT ME"
                                                name="aboutMeText"
                                                value={about.aboutMeText}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>IMAGE</Form.Label>
                                            <Form.Control
                                                name="aboutMeImg"
                                                type="file"
                                            />
                                        </Form.Group>
                                        <Modal.Footer>
                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                onClick={handleCloseAbout}
                                            >
                                                Save
                                            </Button>
                                            {/* <Button
                                        type="submit"
                                        variant="primary"
                                        onClick={handleSaveAbout}
                                    >
                                        Save Changes
                                    </Button> */}
                                        </Modal.Footer>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
