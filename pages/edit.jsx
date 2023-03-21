import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SaveDiscard from "../components/SaveDiscard/SaveDiscard";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Edit(props) {
    const router = useRouter();
    let userProfile = props.userData;
    const handleClickSave = async () => {
        await axios
            .post(`${props.domainUrl}/api/post-data`, {
                userProfile: userProfile,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        router.push(`${props.domainUrl}/${userProfile._id.toString()}`);
    };
    const handleClickDiscard = () => {
        router.push(`${props.domainUrl}/${userProfile._id.toString()}`);
    };
    return (
        <Layout title="Edit Portfolio">
            <SaveDiscard
                onClickSave={handleClickSave}
                onClickDiscard={handleClickDiscard}
            />
            <Header data={userProfile} isEdit={true} />
            <AboutMe data={userProfile} isEdit={true} />
            <Skills data={userProfile} isEdit={true} />
            <Projects data={userProfile} isEdit={true} />
            <Experience data={userProfile} isEdit={true} />
            <Achievements data={userProfile} isEdit={true} />
            <Contact data={userProfile} isEdit={true} />
            <Footer data={userProfile} isEdit={true} />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let userData = null;
    const domainUrl = process.env.DOMAIN_URL;
    if (session) {
        await axios
            .get(`${domainUrl}/api/user-email?email=${session.user.email}`)
            .then((res) => {
                userData = res.data;
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
    return {
        props: {
            userData,
            domainUrl,
        },
    };
}
