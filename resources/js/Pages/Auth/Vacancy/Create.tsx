import { useEffect, FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import QuillEditor from "@/Components/QuillEditor";

export default function Create({ auth, flash }: any) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } =
        useForm({
            job_title: "Job",
            basic_information: "",
            job_specification: "",
            job_description: "",
            responsibilities: "",
            requirements: "",
            qualifications: "",
            what_we_offer: "",
            note: "",
            working_time: "",
            footer_note: "",
            deadline: "",
        });

    useEffect(() => {
        if (wasSuccessful) {
            // reset();
        }
    }, [wasSuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("auth.vacancy.store"));
        // reset();
    };
    const onChange = (e: any) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    const handleChange = (name: any, value: string) => {
        console.log(name, value);
        setData(name, value);
    };

    return (
        <AuthenticatedLayout
            user={auth?.user}
            flash={flash}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Create Vacancy" />

            <InputLabel
                htmlFor=""
                value="Create New Vacancy"
                className="mb-4 font-bold text-xl"
            />
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="job_title" value="Job Title" />
                    <TextInput
                        id="job_title"
                        name="job_title"
                        value={data.job_title}
                        className="mt-1 block w-full"
                        autoComplete="job_title"
                        isFocused={true}
                        onChange={(e: any) => onChange(e)}
                    />
                    <InputError message={errors.job_title} className="mt-2" />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Basic Information"
                        onChange={handleChange}
                        name="basic_information"
                    />
                    <InputError
                        message={errors.basic_information}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Job Specification"
                        onChange={handleChange}
                        name="job_specification"
                    />
                    <InputError
                        message={errors.job_specification}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Job Description"
                        onChange={handleChange}
                        name="job_description"
                    />
                    <InputError
                        message={errors.job_description}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Responsibilities"
                        onChange={handleChange}
                        name="responsibilities"
                    />
                    <InputError
                        message={errors.responsibilities}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Requirements"
                        onChange={handleChange}
                        name="requirements"
                    />
                    <InputError
                        message={errors.requirements}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Qualifications"
                        onChange={handleChange}
                        name="qualifications"
                    />
                    <InputError
                        message={errors.qualifications}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="What we offer"
                        onChange={handleChange}
                        name="what_we_offer"
                    />
                    <InputError
                        message={errors.what_we_offer}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Note"
                        onChange={handleChange}
                        name="note"
                    />
                    <InputError message={errors.note} className="mt-2" />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Working Time"
                        onChange={handleChange}
                        name="working_time"
                    />
                    <InputError
                        message={errors.working_time}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Footer Note"
                        onChange={handleChange}
                        name="footer_note"
                    />
                    <InputError message={errors.footer_note} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="deadline" value="Deadline" />
                    <TextInput
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={data.deadline}
                        className="mt-1 block w-full"
                        autoComplete="deadline"
                        isFocused={true}
                        onChange={(e: any) => onChange(e)}
                    />
                    <InputError message={errors.deadline} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Create
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
