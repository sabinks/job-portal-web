import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

function Show() {
    const {
        props: { employer },
    } = usePage<any>();

    return (
        <div>
            <Head title={employer.organization_name} />

            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">
                                    {employer.vacancies.length}
                                </p>
                                <p className="text-gray-400">Jobs</p>
                            </div>
                            {/* <div>
                                
                                <p className="font-bold text-gray-700 text-xl">
                                    10
                                </p>
                                <p className="text-gray-400">Photos</p>
                            </div>
                            <div>
                                
                                <p className="font-bold text-gray-700 text-xl">
                                    89
                                </p>
                                <p className="text-gray-400">Comments</p>
                            </div> */}
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img
                                    src={employer?.banner_public_path}
                                    className="object-scale-down h-36 w-36"
                                />
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    />
                                </svg> */}
                            </div>
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <Link
                                className="inline-flex items-center px-4 py-1 bg-accent2 border border-transparent rounded-md font-semibold text-xs text-darkgray uppercase tracking-widest hover:bg-gray-700 hover:text-lightgray focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-300"
                                href={route(
                                    "employer-vacancies.show",
                                    employer.slug
                                )}
                            >
                                Vacancies
                            </Link>
                            {/* <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Connect
                            </button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Message
                            </button> */}
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">
                            {employer.organization_name}
                            {/* <span className="font-light text-gray-500">27</span> */}
                        </h1>
                        <p className="font-light text-gray-600 mt-3">
                            {employer.industry_type.name}
                        </p>
                        <p className="mt-8 text-gray-500">{employer.address}</p>
                        <p className="mt-2 text-gray-500">
                            {employer.contact_number}
                        </p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            {employer.about_us}
                        </p>
                        {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                            Show more
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;
