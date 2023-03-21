import React from "react";

export default function HomeBody() {
    return (
        <div className="mb-10">
            <div className="h-max w-full pb-10">
                <div className="relative">
                    <img
                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1666788405/portfolio/home-image_yhskka.jpg"
                        className="bg-cover h-full w-full"
                    />
                    <h2 className="absolute text-4xl text-white bottom-4 left-1/2 -translate-x-1/2">
                        Kick start your professional career with us!
                    </h2>
                </div>
            </div>

            <div className="flex px-16 items-center h-96 mt-12">
                <div className="flex-1 text-center">
                    <img
                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1666789555/portfolio/portfolio-1_rbimpt.jpg"
                        alt=""
                    />
                </div>
                <div className="flex-1">
                    <div className="px-20">
                        <div className="text-4xl text-left text-gray-900 font-bold">
                            Need of Portfolio
                        </div>
                        <p className="text-2xl text-slate-800">
                            Portfolios show the cumulative efforts and learning
                            of a particular student over time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex px-16 items-center h-96 mt-20">
                <div className="flex-1">
                    <div className="px-20">
                        <div className="text-4xl text-left text-gray-900 font-bold">
                            Customized Portfolio
                        </div>
                        <p className="text-2xl text-slate-800">
                            Create a cohesive portfolio for your body of work,
                            no matter what you make. Combine blank and pre-built
                            sections and use text, imagery, or videos to
                            highlight each piece.
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    <img
                        src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664983443/customized_eyurwy.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
