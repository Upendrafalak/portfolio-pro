import classes from "./Experience.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

function Experience(props) {
    // const [showDialogEdit, setShowDialogEdit] = useState(false);
    // const handleCloseEdit = () => setShowDialogEdit(false);
    // const handleShowEdit = () => setShowDialogEdit(true);

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

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

    const [exp, setExp] = useState({
        allExp: props.data.exp,
    });

    const changedExp = exp;

    const handleChange = (e, index) => {
        if (e.target.id === "jobTitle") {
            changedExp.allExp[index].jobTitle = e.target.value;
        } else if (e.target.id === "company") {
            changedExp.allExp[index].company = e.target.value;
        } else if (e.target.id === "timePeriod") {
            changedExp.allExp[index].timePeriod = e.target.value;
        } else if (e.target.id === "location") {
            changedExp.allExp[index].location = e.target.value;
        } else if (e.target.id === "desc") {
            changedExp.allExp[index].desc = e.target.value;
        }
        setExp({ allExp: changedExp.allExp });
        // props.data.exp = exp.allExp;
    };

    const handleDelete = (e, index) => {
        const afterDelete = exp.allExp.filter(function (el) {
            return el._id !== exp.allExp[index]._id;
        });
        setExp({ allExp: afterDelete });
        // props.data.exp = exp.allExp;
    };

    const newExp = {
        _id: "",
        jobTitle: "FULL STACK WEB DEVELOPER INTERN",
        company: "Google",
        timePeriod: "Dec 2021 - Jan 2023",
        location: "Mumbai",
        desc: "Developed backend apis for Google's Cloud Platform",
    };

    const handleClickAdd = () => {
        const addedExpArray = exp.allExp;
        newExp._id = uuidv4();
        addedExpArray.push(newExp);
        setExp({ allExp: addedExpArray });
        // props.data.exp = exp.allExp;
    };

    useEffect(() => {
        props.data.exp = exp.allExp;
    }, [exp]);

    const expList = exp.allExp.map((item, index) => (
        <Card key={item._id} style={{ width: "36rem" }} className={classes.exp}>
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
                            show={showDialogEdit.activeModal === index}
                            onHide={handleCloseEdit}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT EXPERIENCE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="JOB TITLE"
                                            id="jobTitle"
                                            value={item.jobTitle.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="COMPANY NAME"
                                            id="company"
                                            value={item.company.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="timePeriod"
                                            type="text"
                                            value={item.timePeriod.toUpperCase()}
                                            placeholder="TIME PERIOD (eg DEC 2021 - MAR 2022)"
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="location"
                                            type="text"
                                            placeholder="LOCATION"
                                            value={item.location.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="desc"
                                            as="textarea"
                                            rows="8"
                                            value={item.desc.toUpperCase()}
                                            placeholder="JOB DESCRIPTION / TASKS / ACHIEVEMENTS"
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
            <Card.Body>
                <div className={classes.titleLoc}>
                    <Card.Title>{item.jobTitle.toUpperCase()}</Card.Title>
                    <Card.Text className={classes.loc}>
                        {item.location.toUpperCase()}
                    </Card.Text>
                </div>
                <Card.Text className={classes.company}>
                    {item.company.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.timePeriod}>
                    {item.timePeriod.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.desc}>
                    {item.desc.toUpperCase()}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="experience" />
            <h1 className={classes.header}>EXPERIENCE</h1>
            <div className={classes.allExp}>{expList}</div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"experience"}
                        handleClick={handleClickAdd}
                        // handleShow={handleShowAdd}
                    />
                    {/* <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD EXPERIENCE</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="JOB TITLE"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="COMPANY NAME"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="TIME PERIOD (eg DEC 2021 - MAR 2022)"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="LOCATION"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        placeholder="JOB DESCRIPTION / TASKS / ACHIEVEMENTS"
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

export default Experience;
