import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    name: {
        type: String,
        default: "Sarvesh Patil",
    },
    email: {
        type: String,
    },
    intro: {
        type: String,
        default: "intro",
    },
    introImg: {
        type: String,
        default:
            "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
    },
    aboutMe: {
        type: String,
        default: "aboutMe",
    },
    aboutMeImg: {
        type: String,
        default:
            "https://res.cloudinary.com/sarveshp46/image/upload/c_scale,w_1000/v1657258037/1656832322291_sp2pez.jpg",
    },
    skills: [
        {
            name: {
                type: String,
                default: "REACTJS",
            },
            img: {
                type: String,
                default:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/react_kemmts.png",
            },
        },
    ],
    projects: [
        {
            title: {
                type: String,
                default: "PORTFOLIO PRO",
            },
            type: {
                type: String,
                default: "WEBSITE",
            },
            desc: {
                type: String,
                default: "THIS APP ALLOWS TO CREATE YOUR OWN PORTFOLIO WEBSITE",
            },
            appLink: {
                type: String,
                default: "https://portfolio-pro.one/",
            },
            github: {
                type: String,
                default: "https://github.com/SarveshPatil29/portfolio",
            },
            img: {
                type: String,
                default:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1663178483/git-workshop-readme/profile-readme_lsp5od.png",
            },
        },
    ],
    exp: [
        {
            jobTitle: {
                type: String,
                default: "ANDROID DEVELEPER INTERN",
            },
            company: {
                type: String,
                default: "EXPOSYS DATA LABS",
            },
            timePeriod: {
                type: String,
                default: "DEC 2021 - JAN 2022",
            },
            location: {
                type: String,
                default: "ONLINE",
            },
            desc: {
                type: String,
                default: "CREATED A CHAT APPLICATION",
            },
        },
    ],
    ach: [
        {
            name: {
                type: String,
                default: "CODE-O-FIESTA",
            },
            position: {
                type: String,
                default: "2ND",
            },
        },
    ],
    handles: [
        {
            name: {
                type: String,
                default: "Github",
            },
            link: {
                type: String,
                default: "https://github.com/SarveshPatil29",
            },
            img: {
                type: String,
                default:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/githubLogo_gtmev3.png",
            },
        },
    ],
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const UserProfile =
    mongoose.models.UserProfile ||
    mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
