import classes from "./LoginBody.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import googleLogo from "../../public/images/googleLogo.png";
import githubLogo from "../../public/images/githubLogo.png";
import twitterLogo from "../../public/images/twitterLogo.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginBody(props) {
    return (
        <section className={classes.content}>
            <h1 className={classes.header}>SIGN IN TO PORTFOLIO PRO</h1>
            <div className={classes.login}>
                {/* <div className={classes.loginForm}>
                    <div className={classes.loginFormDiv}>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL ADDRESS</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ENTER EMAIL"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="ENTER PASSWORD"
                                />
                            </Form.Group>
                            <div className={classes.loginBtnDiv}>
                                <Button
                                    href="/dashboard"
                                    className={classes.loginBtn}
                                    variant="dark"
                                    type="submit"
                                >
                                    SIGN IN
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div> */}

                <div className={classes.loginLinks}>
                    <Button
                        onClick={() =>
                            signIn(props.providers.google.id, {
                                callbackUrl: `${window.location.origin}/dashboard`,
                            })
                        }
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={googleLogo}
                            alt="Google Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE WITH{" "}
                            {props.providers.google.name.toUpperCase()}
                        </div>
                    </Button>
                    <Button
                        onClick={() =>
                            signIn(props.providers.github.id, {
                                callbackUrl: `${window.location.origin}/dashboard`,
                            })
                        }
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={githubLogo}
                            alt="Github Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE WITH{" "}
                            {props.providers.github.name.toUpperCase()}
                        </div>
                    </Button>
                    <Button
                        onClick={() =>
                            signIn(props.providers.twitter.id, {
                                callbackUrl: `${window.location.origin}/dashboard`,
                            })
                        }
                        className={classes.continueBtn}
                        variant="light"
                    >
                        <Image
                            width={25}
                            height={25}
                            src={twitterLogo}
                            alt="Twitter Logo"
                        />
                        <div className={classes.btnText}>
                            CONTINUE WITH{" "}
                            {props.providers.twitter.name.toUpperCase()}
                        </div>
                    </Button>
                </div>
            </div>
            {/* <div className={classes.cantLogin}>
                <Button href="/forgotpassword" variant="dark">
                    CANT SIGN IN?
                </Button>
            </div> */}
        </section>
    );
}
