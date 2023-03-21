import classes from "./Achievements.module.css";
import { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

export default function Achievements(props) {
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

    const [ach, setAch] = useState({
        allAch: props.data.ach,
    });

    const changedAch = ach;

    const handleChange = (e, index) => {
        if (e.target.id === "name") {
            changedAch.allAch[index].name = e.target.value;
        } else if (e.target.id === "position") {
            changedAch.allAch[index].position = e.target.value;
        }
        setAch({ allAch: changedAch.allAch });
        // props.data.ach = ach.allAch;
    };

    const handleDelete = (e, index) => {
        const afterDelete = ach.allAch.filter(function (el) {
            return el._id !== ach.allAch[index]._id;
        });
        setAch({ allAch: afterDelete });
        // props.data.ach = ach.allAch;
    };

    const newAch = {
        _id: "",
        name: "Competition",
        position: "Your Position (1st/2nd/3rd)",
    };

    const handleClickAdd = () => {
        const addedAchArray = ach.allAch;
        newAch._id = uuidv4();
        addedAchArray.push(newAch);
        setAch({ allAch: addedAchArray });
        // props.data.ach = ach.allAch;
    };

    useEffect(() => {
        props.data.ach = ach.allAch;
    }, [ach]);

    const achList = ach.allAch.map((item, index) => (
        <Card key={item._id} style={{ width: "36rem" }} className={classes.ach}>
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
                                <Modal.Title>EDIT ACHIEVEMENT</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="COMPETITION NAME"
                                            id="name"
                                            value={item.name.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="YOUR POSITION IN THE COMPETITION"
                                            id="position"
                                            value={item.position.toUpperCase()}
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
                <Card.Title>{item.name.toUpperCase()}</Card.Title>
                <Card.Text className={classes.position}>
                    {item.position.toUpperCase()}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="achievements" />
            <h1 className={classes.header}>ACHIEVEMENTS</h1>
            <div className={classes.allAch}>{achList}</div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"achievement"}
                        handleClick={handleClickAdd}
                        // handleShow={handleShowAdd}
                    />
                    {/* <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD ACHIEVEMENT</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="COMPETITION NAME"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="YOUR POSITION IN THE COMPETITION"
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
