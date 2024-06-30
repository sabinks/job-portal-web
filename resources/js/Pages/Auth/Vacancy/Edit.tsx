import { useEffect, FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import QuillEditor from "@/Components/QuillEditor";

export default function Create({ auth, flash }: any) {
    const {
        props: {
            vacancy: {
                id,
                slug,
                job_title,
                basic_information,
                job_specification,
                job_description,
                responsibilities,
                requirements,
                qualifications,
                what_we_offer,
                note,
                working_time,
                footer_note,
                deadline,
            },
        },
    } = usePage<any>();

    const { data, setData, put, processing, errors, reset, wasSuccessful } =
        useForm({
            job_title,
            basic_information,
            job_specification,
            job_description,
            responsibilities,
            requirements,
            qualifications,
            what_we_offer,
            note,
            working_time,
            footer_note,
            deadline,
        });

    useEffect(() => {
        if (wasSuccessful) {
            // reset();
        }
    }, [wasSuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("auth-vacancy.update", slug));
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
                        name="basic_information"
                        label="Basic Information"
                        value={data.basic_information}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.basic_information}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="job_specification"
                        label="Job Specification"
                        value={data.job_specification}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.job_specification}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="job_description"
                        label="Job Description"
                        value={data.job_description}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.job_description}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="responsibilities"
                        label="Responsibilities"
                        value={data.responsibilities}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.responsibilities}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="requirements"
                        label="Requirements"
                        value={data.requirements}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.requirements}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="qualifications"
                        label="Qualifications"
                        value={data.qualifications}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.qualifications}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        name="what_we_offer"
                        label="What we offer"
                        value={data.what_we_offer}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.what_we_offer}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Note"
                        name="note"
                        value={data.note}
                        onChange={handleChange}
                    />
                    <InputError message={errors.note} className="mt-2" />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Working Time"
                        name="working_time"
                        value={data.working_time}
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.working_time}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <QuillEditor
                        label="Footer Note"
                        name="footer_note"
                        value={data.footer_note}
                        onChange={handleChange}
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
                        Update
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
