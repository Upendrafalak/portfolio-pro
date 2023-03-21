import { getSession } from "next-auth/react";
import HomeBody from "../components/HomeBody/HomeBody";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import Layout from "../components/Layout";
import FooterMain from "../components/FooterMain/FooterMain";

export default function Home({ domainUrl }) {
    return (
        <div>
            <Layout title="Portfolio Pro">
                <HomeNavbar />
                <HomeBody />
                <FooterMain domainUrl={domainUrl} />
            </Layout>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const domainUrl = process.env.DOMAIN_URL;
    // console.log(session);
    return {
        props: {
            session,
            domainUrl,
        },
    };
}
