import mongoose from "mongoose";
import UserProfile from "../../models/userProfile";

export default async function handler(req, res) {
    mongoose
        .connect(
            "mongodb+srv://sarvesh2902:Hi5JUL8XES1YAmOU@cluster0.wfnik3x.mongodb.net/portfolio?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Connected to Mongo");
        })
        .catch((e) => {
            console.log("Failed to connect to Mongo");
            console.log(e);
        });

    if (req.method === "GET") {
        let userProfile = await UserProfile.findOne({ email: req.query.email });
        if (!userProfile) {
            const newUser = {
                name: "Your Name",
                email: req.query.email,
                intro: "I'm a second year student at NMIMS. I'm currently pursuing degree in Electronics and Telecommunication. I am a skilled programmer, being proficient in web development and data science. I'm a part of a non profit organization national organization (ISTE- NMIMS Student Chapter) and harbor multiple skills, academic, as well as non academic.",
                introImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666500903/portfolio/user-profile_e7zgv2.jpg",
                aboutMe:
                    "I'm an artist, having worked in the designing industry for 4 years. My experience in graphic and logo designing has helped me develop a keen eye for detail and helped me understand the internal mechanics of producing results within deadlines. I've resorted to agile methods to get inspiring results within small but efficient time spaces.",
                aboutMeImg:
                    "https://res.cloudinary.com/sarveshp46/image/upload/v1666533051/portfolio/user-profile2_gbhkxk.jpg",
                isAdmin: false,
                skills: [
                    {
                        name: "REACT",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657287794/portfolio/react_kemmts.png",
                        _id: "6353f2d8ff0309af86079eeb",
                    },
                    {
                        name: "TYPESCRIPT",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                        _id: "635bbf65105d69d6a088ce62",
                    },
                    {
                        name: "JAVA",
                        img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
                        _id: "635bbf65105d69d6a088ce63",
                    },
                    {
                        name: "JAVASCRIPT",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
                        _id: "635bbf65105d69d6a088ce64",
                    },
                    {
                        name: "NEXT JS",
                        img: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
                        _id: "635bbf65105d69d6a088ce65",
                    },
                    {
                        name: "PYTHON",
                        img: "https://prepinsta.com/wp-content/uploads/2020/07/python-removebg-preview.webp",
                        _id: "635bbf65105d69d6a088ce66",
                    },
                    {
                        name: "DATA STRUCTURES",
                        img: "https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png",
                        _id: "635bbf65105d69d6a088ce67",
                    },
                    {
                        name: "GITHUB",
                        img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                        _id: "635bbf65105d69d6a088ce68",
                    },
                    {
                        name: "DEVOPS",
                        img: "https://techkasetti.com/images/kt-logo-devops.png",
                        _id: "635bbf65105d69d6a088ce69",
                    },
                ],
                projects: [
                    {
                        title: "TOUR GUIDe",
                        type: "website",
                        desc: "TOUR GUIDE IS A WEBSITE THAT HELPS USERS EXPLORE THE MOST BEAUTIFUL, CALMING, AND EXOTIC PLACES IN INDIA. IT WAS BUILT TO HIGHLIGHT THE BEAUTY OF INDIA.",
                        appLink: "",
                        github: "https://github.com/divisha6/TourGuide.git",
                        img: "https://res.cloudinary.com/duvkuygt2/image/upload/v1666955270/tour_guide_img_pvaffq.png",
                        _id: "6353f2d8ff0309af86079eee",
                    },
                    {
                        title: "E-LEARNING TUTORIAL",
                        type: "website",
                        desc: "A WEBSITE MADE WITH REACTJS FOR AN E-LEARNING PLATFORM ELEARN. IT CONTAINS ALL THE BASIC FUNCTIONALITIES LIKE VIEWING COURSES AND CONTACT DETAILS.",
                        appLink: "https://portfolio-pro.one/",
                        github: "https://github.com/divisha6/e-tutorial-website",
                        img: "https://res.cloudinary.com/duvkuygt2/image/upload/v1666956002/elearn_img_ycjuku.png",
                        _id: "635bbf65105d69d6a088ce6c",
                    },
                    {
                        title: "COLLEGE WEBSITe",
                        type: "website",
                        desc: "THIS IS A BASIC COLLEGE WEBSITE MADE FOR 'HOLY CROSS' COLLEGE. IT CONTAINS ALL THE BASIC FUNCTIONALITIES SUCH AS FACULTY, COURSES, AND CONTACT INFO. THE FUTURE SCOPE OF THIS PROJECT IS VAST.",
                        appLink:
                            "college-website-883p19b1l-divisha6.vercel.app",
                        github: "https://github.com/divisha6/college-website",
                        img: "https://res.cloudinary.com/duvkuygt2/image/upload/v1666956279/college_website_img_tjfbsa.png",
                        _id: "635bbf65105d69d6a088ce6d",
                    },
                ],
                exp: [
                    {
                        jobTitle: "EXECUTIVE SECRETARY",
                        company: "ISTE VESIt",
                        timePeriod: "2022- PRESENt",
                        location: "Mumbai",
                        desc: "CONDUCTED MULTIPLE EVENTS. \nMANAGED A TEAM OF 19 PEOPLE EFFICIENTLY. \nLEARNED THE PROCESS AND TECHNICALITIES OF A WELL-MANAGED EVENT.\n",
                        _id: "6353f2d8ff0309af86079ef1",
                    },
                    {
                        jobTitle: "JUNIOR REPORTER",
                        company: "VESIT CONNECT",
                        timePeriod: "2021 - 2022",
                        location: "Mumbai",
                        desc: "WROTE MORE THAN 15 ARTICLES FOR THE COLLEGE NEWSLETTER WHICH NUMEROUS STUDENTS AND FACULTY MEMBERS READ. \nPROOFREAD, ANALYZED, AND IMPROVISED MULTIPLE ARTICLES.  ",
                        _id: "635bbf65105d69d6a088ce6f",
                    },
                    {
                        jobTitle: "SOFTWARE DEVELOPER INTERN",
                        company: "SUD LIFE",
                        timePeriod: "2022- PRESENT",
                        location: "Mumbai",
                        desc: "BUILT AND IMPLEMENTED LOGIC FOR VARIOUS POLICY\nVALIDATIONS. \nTESTING, MANAGING, AND MERGING CODE. \nIMPLEMENTED FUNCTIONS FOR DISPLAY AND MANAGING OF POLICIES.\n",
                        _id: "635bbf65105d69d6a088ce70",
                    },
                    {
                        jobTitle: "JR. DEPUTY CULTURAL SECRETARY",
                        company: "VESIT CULTURAL COUNCIl",
                        timePeriod: "2021 - 2022",
                        location: "Mumbai",
                        desc: "CONDUCTED CULTURAL EVENTS ATTENDED BY 300+ PEOPLE. \nHOSTED AN EVENT DURING THE FESTS. \nMANAGED AND HANDLED THE TEAM EFFICIENTLY. \n",
                        _id: "635bbf65105d69d6a088ce71",
                    },
                    {
                        jobTitle: "FREELANCE WRITER AND EDITOR",
                        company: "UPWORk",
                        timePeriod: "2022- PRESENT",
                        location: "Mumbai",
                        desc: "WORKED FOR MULTIPLE INTERNATIONAL CLIENTS AND DELIVERED HIGH-QUALITY WORK.\nEARNED $350+ WORKING AS A GHOSTWRITER AND EDITOR.",
                        _id: "635bbf65105d69d6a088ce72",
                    },
                ],
                ach: [
                    {
                        name: "JAVA PROGRAMMING EXAM- IIT KHARAGPUr",
                        position: "SILVER ELITE ",
                        _id: "635bbf65105d69d6a088ce73",
                    },
                    {
                        name: "JOY OF COMPUTING IN PYTHON- IIT MADRAs",
                        position: "SILVER ELITE ",
                        _id: "635bbf65105d69d6a088ce74",
                    },
                    {
                        name: "TECHTRIX - SEMI TECHNICAL EVENt",
                        position: "SECOND PLACe",
                        _id: "635bbf65105d69d6a088ce75",
                    },
                    {
                        name: "SSC EXAm",
                        position: "93.20%",
                        _id: "635bbf65105d69d6a088ce76",
                    },
                    {
                        name: "HSC EXAm",
                        position: "92.46%",
                        _id: "635bbf65105d69d6a088ce77",
                    },
                    {
                        name: "SPELLING BEe",
                        position: "THIRD PLACe",
                        _id: "635bbf65105d69d6a088ce78",
                    },
                    {
                        name: "POETRY WRITING COMPETITIOn",
                        position: "FIRST PLACe",
                        _id: "635bbf65105d69d6a088ce79",
                    },
                ],
                handles: [
                    {
                        name: "Github",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/githubLogo_gtmev3.png",
                        _id: "6353f2d8ff0309af86079ef7",
                    },
                    {
                        name: "linkedin",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/linkedinLogo_aewtwd.png",
                        _id: "6353f2d8ff0309af86079ef8",
                    },
                    {
                        name: "twitter",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794177/portfolio/twitterLogo_zdffgg.png",
                        _id: "6353f2d8ff0309af86079ef9",
                    },
                    {
                        name: "instagram",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/instagramLogo_fyozok.png",
                        _id: "6353f2d8ff0309af86079efa",
                    },
                    {
                        name: "facebook",
                        link: "https://github.com/SarveshPatil29",
                        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1666794148/portfolio/facebookLogo_njnxd6.png",
                        _id: "6353f2d8ff0309af86079efb",
                    },
                ],
            };

            const user = new UserProfile(newUser);
            await user.save();
            userProfile = await UserProfile.findOne({
                email: req.query.email,
            });
        }
        console.log(userProfile);
        res.status(200).json(userProfile);
    }
}
