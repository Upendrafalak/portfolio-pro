import classes from "./Projects.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import DelBtn from "../DelBtn/DelBtn";
import AddBtn from "../AddBtn/AddBtn";
import githubLogo from "../../public/images/githubLogo.png";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

function Projects(props) {
    // const [showDialogEdit, setShowDialogEdit] = useState(false);
    // const handleCloseEdit = () => setShowDialogEdit(false);
    // const handleShowEdit = () => setShowDialogEdit(true);

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

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const [projects, setProjects] = useState({
        allProjects: props.data.projects,
    });

    const changedProject = projects;

    const handleChange = (e, index) => {
        if (e.target.id === "title") {
            changedProject.allProjects[index].title = e.target.value;
        } else if (e.target.id === "desc") {
            changedProject.allProjects[index].desc = e.target.value;
        } else if (e.target.id === "appLink") {
            changedProject.allProjects[index].appLink = e.target.value;
        } else if (e.target.id === "github") {
            changedProject.allProjects[index].github = e.target.value;
        } else if (e.target.id === "type") {
            changedProject.allProjects[index].type = e.target.value;
        } else if (e.target.id === "img") {
            changedProject.allProjects[index].img = e.target.value;
        }
        setProjects({ allProjects: changedProject.allProjects });
        // props.data.projects = projects.allProjects;
    };

    const handleDelete = (e, index) => {
        const afterDelete = projects.allProjects.filter(function (el) {
            return el._id !== projects.allProjects[index]._id;
        });
        setProjects({ allProjects: afterDelete });
        // props.data.projects = projects.allProjects;
    };

    const newProject = {
        _id: "",
        title: "PORTFOLIO PRO",
        desc: "Portfolio Pro is a portfolio generator tool which allows you to create a portfolio customized to your likings and skill sets",
        appLink: "https://portfolio-pro.one/",
        github: "https://github.com/SarveshPatil29/portfolio",
        type: "Website",
        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657342342/portfolio/Portfolio-update_wjuawf.jpg",
    };

    const handleClickAdd = () => {
        const addedProjectArray = projects.allProjects;
        newProject._id = uuidv4();
        addedProjectArray.push(newProject);
        setProjects({ allProjects: addedProjectArray });
        // props.data.projects = projects.allProjects;
    };

    useEffect(() => {
        props.data.projects = projects.allProjects;
    }, [projects]);

    const projectList = projects.allProjects.map((item, index) => (
        <Card
            key={item._id}
            style={{ width: "18rem" }}
            className={classes.project}
        >
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
                                <Modal.Title>EDIT PROJECT</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="title"
                                            type="text"
                                            placeholder="PROJECT TITLE"
                                            value={item.title.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Select
                                        id="type"
                                        className="mb-3"
                                        aria-label="Default select example"
                                        value={item.type.toUpperCase()}
                                        onChange={(e) => {
                                            handleChange(e, index);
                                        }}
                                    >
                                        <option>SELECT PROJECT TYPE</option>
                                        <option value="android">ANDROID</option>
                                        <option value="website">WEBSITE</option>
                                        <option value="desktop">DESKTOP</option>
                                        <option value="other">OTHER</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="desc"
                                            as="textarea"
                                            rows="8"
                                            placeholder="PROJECT DESCRIPTION"
                                            value={item.desc.toUpperCase()}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="appLink"
                                            type="text"
                                            placeholder="APPLICATION LINK"
                                            value={item.appLink}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="github"
                                            type="text"
                                            placeholder="GITHUB REPO LINK"
                                            value={item.github}
                                            onChange={(e) => {
                                                handleChange(e, index);
                                            }}
                                        />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3">
                                        <Form.Label>PROJECT IMAGE</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group> */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>PROJECT IMAGE</Form.Label>
                                        <Form.Control
                                            id="img"
                                            type="text"
                                            placeholder="PROJECT IMAGE URL"
                                            value={item.img}
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
                                {/* <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleCloseEdit}
                                >
                                    Save Changes
                                </Button> */}
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
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <div className={classes.titleType}>
                    <Card.Title>{item.title.toUpperCase()}</Card.Title>
                    <p className={classes.type}>{item.type.toUpperCase()}</p>
                </div>
                <Card.Text>{item.desc.toUpperCase()}</Card.Text>
                <div className={classes.links}>
                    <Button
                        className={classes.appBtn}
                        href={item.appLink}
                        variant="dark"
                    >
                        VIEW APPLICATION
                    </Button>
                    <Link href={item.github}>
                        <a className={classes.aTest} target="_blank">
                            <Image
                                className={classes.githubLogo}
                                width={40}
                                height={40}
                                src={githubLogo}
                                alt="github logo"
                            />
                        </a>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="projects" />
            <h1 className={classes.header}>PROJECTS</h1>
            <div className={classes.allProjects}>{projectList}</div>
            {props.isEdit && (
                <div className={classes.addBtn}>
                    <AddBtn
                        width={40}
                        height={40}
                        item={"project"}
                        handleClick={handleClickAdd}
                        // handleShow={handleShowAdd}
                    />
                    {/* <Modal show={showDialogAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD PROJECT</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="PROJECT TITLE"
                                    />
                                </Form.Group>
                                <Form.Select
                                    className="mb-3"
                                    aria-label="Default select example"
                                >
                                    <option>SELECT PROJECT TYPE</option>
                                    <option value="android">ANDROID</option>
                                    <option value="website">WEBSITE</option>
                                    <option value="desktop">DESKTOP</option>
                                    <option value="other">OTHER</option>
                                </Form.Select>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        placeholder="PROJECT DESCRIPTION"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="APPLICATION LINK"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="GITHUB REPO LINK"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PROJECT IMAGE</Form.Label>
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

export default Projects;
