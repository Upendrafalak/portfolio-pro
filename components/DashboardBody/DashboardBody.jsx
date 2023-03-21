import classes from "./DashboardBody.module.css";

export default function DashboardBody() {
    return (
        <section>
            <div className={classes.body}>
                <img
                    src="https://res.cloudinary.com/sarveshp46/image/upload/v1666795440/portfolio/homeimg_hri2ki.jpg"
                    alt="home-image"
                />
            </div>
        </section>
    );
}
