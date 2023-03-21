import classes from "./Skills.module.css";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import { useState, useReducer } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function Skills(props) {
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
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
    // const handleSaveEdit = () => {
    //     setSkills(updatedSkills);
    //     setShowDialogEdit({
    //         showModal: false,
    //         activeModal: null,
    //     });
    // };
    const handleShowEdit = (e, index) => {
        setShowDialogEdit({
            showModal: true,
            activeModal: index,
        });
    };

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const [skills, setSkills] = useState({
        allSkills: props.data.skills,
    });

    const changedSkill = skills;

    const handleChange = (e, index) => {
        if (e.target.id === "name") {
            changedSkill.allSkills[index].name = e.target.value;
        } else if (e.target.id === "img") {
            changedSkill.allSkills[index].img = e.target.value;
        }
        setSkills({ allSkills: changedSkill.allSkills });
        // props.data.skills = skills.allSkills;
    };

    const handleDelete = (e, index) => {
        console.log(skills.allSkills);
        const afterDelete = skills.allSkills.filter(function (el) {
            return el._id !== skills.allSkills[index]._id;
        });
        setSkills({ allSkills: afterDelete });
        console.log(skills.allSkills);
        // props.data.skills = skills.allSkills;
    };

    useEffect(() => {
        props.data.skills = skills.allSkills;
    }, [skills]);

    const newSkill = {
        _id: "",
        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
        name: "REACT",
    };

    const handleClickAdd = () => {
        const addedSkillArray = skills.allSkills;
        newSkill._id = uuidv4();
        addedSkillArray.push(newSkill);
        setSkills({ allSkills: addedSkillArray });
        // props.data.skills = skills.allSkills;
    };

    const skillsList = skills.allSkills.map((item, index) => (
        <div key={item._id} className={classes.skill}>
            <div className={classes.editBtn}>
                {props.isEdit && (
                    <div>
                        <EditBtn
                            width={30}
                            height={30}
                            handleShow={(e) => handleShowEdit(e, index)}
                        />
                        <Modal
                            backdrop="static"
                            show={showDialogEdit.activeModal === index}
                            onHide={handleCloseEdit}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>EDIT SKILL</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="name"
                                            type="text"
                                            placeholder="SKILL NAME"
                                            value={item.name.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3">
                                        <Form.Label>SKILL LOGO</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group> */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>SKILL LOGO</Form.Label>
                                        <Form.Control
                                            id="img"
                                            type="text"
                                            placeholder="SKILL LOGO URL"
                                            value={item.img}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={handleCloseEdit}
                                        >
                                            Close
                                        </Button>
                                        {/* <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleSaveEdit}
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
            <div className={classes.skillImg}>
                <img width={75} height={75} src={item.img} alt="react logo" />
            </div>
            <h2>{item.name.toUpperCase()}</h2>
        </div>
    ));

    const changedNewSkill = newSkill;

    const handleChangeAdd = (e) => {
        newSkill.name = e.target.value;
        // setNewSkill(changedNewSkill);
        console.log(newSkill);
    };

    // skills.allSkills.push(newSkill);

    return (
        <section>
            <br id="skills" />
            <h1 className={classes.header}>SKILLS</h1>

            <div className={classes.allSkills}>{skillsList}</div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"skill"}
                        handleClick={handleClickAdd}
                        // handleShow={handleShowAdd}
                    />
                    {/* <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD SKILL</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="SKILL NAME"
                                        value={newSkill.name}
                                        onChange={(e) => {
                                            handleChangeAdd(e);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>SKILL LOGO</Form.Label>
                                    <Form.Control type="file" />
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

export default Skills;
