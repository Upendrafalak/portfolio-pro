import DashboardBody from "../components/DashboardBody/DashboardBody";
import DashboardNav from "../components/DashboardNav/DashboardNav";
import { signIn, useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import FooterMain from "../components/FooterMain/FooterMain";

export default function Dashboard(props) {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = () => {
            if (status === "unauthenticated") {
                signIn();
            } else {
                setLoading(false);
            }
        };
        securePage();
    });

    if (loading) {
        return (
            <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>
        );
    }

    return (
        <Layout title="Dashboard">
            <DashboardNav isAdmin={props.isAdmin} url={props.userId} />
            <h1 style={{ marginTop: 60, textAlign: "center" }}>
                WELCOME{" "}
                {status === "authenticated"
                    ? `${session.user.name.toUpperCase()}`
                    : ""}
                !
            </h1>
            <DashboardBody />
            <FooterMain
                domainUrl={props.domainUrl}
                url={props.userId}
                isAdmin={props.isAdmin}
            />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let userId = null;
    let isAdmin = false;
    const domainUrl = process.env.DOMAIN_URL;
    if (session) {
        await axios
            .get(`${domainUrl}/api/user-email?email=${session.user.email}`)
            .then((res) => {
                userId = res.data._id;
                if (res.data.isAdmin) {
                    isAdmin = res.data.isAdmin;
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    return {
        props: {
            session,
            userId,
            isAdmin,
            domainUrl,
        },
    };
}
