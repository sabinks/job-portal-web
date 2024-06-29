import { useEffect, FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Captcha from "@/Components/Captcha";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        contact_number: "",
        password: "",
        password_confirmation: "",
    });
    const [formOk, setFormOk] = useState(false);

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    const {
        props: { siteKey },
    } = usePage();
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("employer.register"));
    };
    const onChange = (value: any) => {
        if (value) {
            setFormOk(true);
        } else {
            setFormOk(false);
        }
    };

    return (
        <GuestLayout>
            <Head title="Employeer Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Organization Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        // autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Organization Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        // autoComplete="email"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Organization Phone" />
                    <TextInput
                        id="contact_number"
                        name="contact_number"
                        value={data.contact_number}
                        className="mt-1 block w-full"
                        // autoComplete="contact_number"
                        isFocused={true}
                        onChange={(e) =>
                            setData("contact_number", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.contact_number}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <Captcha siteKey={siteKey} onChange={onchange} />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="ms-4"
                        disabled={processing || !formOk}
                    >
                        Create Employer Account
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
