import mongoose from "mongoose";
import UserProfile from "../../models/userProfile";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    await mongoose
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

    if (req.method === "POST") {
        const userProfileUpdated = req.body.userProfile;
        console.log(userProfileUpdated);
        await UserProfile.replaceOne(
            { email: req.body.userProfile.email },
            userProfileUpdated
        );
        res.send("Updated");
    }
}
