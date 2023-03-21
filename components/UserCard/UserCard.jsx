import React from "react";

const UserCard = (props) => {
    console.log(process.env.DOMAIN_URL);
    return (
        <div key={props.key} className="mx-5 my-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-64 break-all">
                <img
                    className="w-full h-64"
                    src={props.img}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <p className="text-gray-700 text-base">
                        Portfolio URL: <br />
                        <a href={`${props.domainUrl}/${props.id}`}>
                            {props.domainUrl}/{props.id}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
