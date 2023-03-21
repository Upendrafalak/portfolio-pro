import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard/UserCard";
import Layout from "../components/Layout";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";

import { getSession } from "next-auth/react";
import FooterMain from "../components/FooterMain/FooterMain";

const admin = (props) => {
    const allUsers = props.allUsers.map((user) => (
        <UserCard
            key={user._id}
            id={user._id}
            name={user.name}
            img={user.img}
            domainUrl={props.domainUrl}
        />
    ));
    return (
        <Layout title="Admin Panel">
            <HomeNavbar />
            {props.isAdmin && (
                <div className="flex flex-wrap mb-20">{allUsers}</div>
            )}
            {!props.isAdmin && (
                <div
                    className="text-center mt-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                >
                    <span className="font-medium">
                        YOU HAVE NOT BEEN ASSIGNED ADMIN ROLE. PLEASE CONTACT
                        THE DEVELOPER FOR MORE DETAILS
                    </span>
                </div>
            )}
            <FooterMain domainUrl={props.domainUrl} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const domainUrl = process.env.DOMAIN_URL;
    // let userId = null;
    let isAdmin = false;
    if (session) {
        await axios
            .get(`${domainUrl}/api/user-email?email=${session.user.email}`)
            .then((res) => {
                // userId = res.data._id;
                if (res.data.isAdmin) {
                    isAdmin = res.data.isAdmin;
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    let allUsers = [];
    if (isAdmin) {
        await axios.get(`${domainUrl}/api/allUsers`).then((res) => {
            console.log(res.data);
            allUsers = res.data;
        });
    }

    return {
        props: { allUsers, isAdmin, domainUrl }, // will be passed to the page component as props
    };
}

export default admin;
