import LoginBody from "../components/LoginBody/LoginBody";
import LoginNav from "../components/LoginNav/LoginNav";
import { getProviders, signIn } from "next-auth/react";
import Layout from "../components/Layout";

export default function LoginPage({ providers }) {
    return (
        <Layout title="Sign In">
            <LoginNav />
            <LoginBody providers={providers} />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
