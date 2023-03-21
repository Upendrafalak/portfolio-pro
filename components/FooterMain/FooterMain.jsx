import classes from "./FooterMain.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function FooterMain(props) {
    const [formData, setFormData] = useState({
        message: "",
        email: "",
    });
    const handleChange = (e) => {
        setFormData((prevalue) => {
            return {
                ...prevalue, // Spread Operator
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(props.domainUrl);
        await axios
            .post(`${props.domainUrl}/api/home-mail`, {
                formData: formData,
            })
            .then(function (response) {
                console.log(response);
                alert("Successfully sent the message");
            })
            .catch(function (error) {
                console.log(error);
            });

        setFormData({
            message: "",
            email: "",
        });
    };
    return (
        <section className={classes.footer}>
            <section className="bg-black dark:bg-black w-full">
                <div className="pt-3 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-2 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        CONTACT US
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex flex-col">
                            <div className="">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <br />

                            <div>
                                <textarea
                                    id="message"
                                    rows="3"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    name="message"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="no-underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded text-sm"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
            <div className={classes.copyright}>
                <p>
                    <Link href="/dashboard">
                        <a className={classes.homeLink}>PORTFOLIO PRO</a>
                    </Link>
                </p>
                <p>@2022 PORTFOLIO-PRO</p>
                <p>BUILT USING NEXTJS</p>
            </div>
        </section>
    );
}
