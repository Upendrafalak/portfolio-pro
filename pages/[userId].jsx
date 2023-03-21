import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import Layout from "../components/Layout";

export default function UserName(props) {
    return (
        <Layout title="View Portfolio">
            <Header data={props.userData} isEdit={false} />
            <AboutMe data={props.userData} isEdit={false} />
            <Skills data={props.userData} isEdit={false} />
            <Projects data={props.userData} isEdit={false} />
            <Experience data={props.userData} isEdit={false} />
            <Achievements data={props.userData} isEdit={false} />
            <Contact
                data={props.userData}
                isEdit={false}
                domainUrl={props.domainUrl}
            />
            <Footer data={props.userData} isEdit={false} />
        </Layout>
    );
}

export async function getServerSideProps({ resolvedUrl }) {
    const id = resolvedUrl.slice(1);
    let userData = null;
    const domainUrl = process.env.DOMAIN_URL;
    await axios
        .get(`${domainUrl}/api/user-profile?id=${id}`)
        .then((res) => {
            userData = res.data;
        })
        .catch((err) => {
            console.log("err", err);
        });

    return {
        props: { userData, domainUrl },
    };
}
