import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Index({
    auth,
    year,
    employers,
}: PageProps<{ year: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Job Portal" />
            <div className="text-black">
                <div className="relative min-h-screen flex justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <nav className="-mx-3 flex flex-1 justify-end text-black">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className=""
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className=""
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("seeker.register")}
                                            className=""
                                        >
                                            Job Seeker Register
                                        </Link>
                                        <Link
                                            href={route("employer.register")}
                                            className=""
                                        >
                                            Employer Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6 container mx-auto">
                            {employers?.map(
                                ({ organization_name, vacancies }: any) => {
                                    return (
                                        <div className="flex">
                                            <h1>{organization_name}</h1>
                                            <div className="">
                                                <ul>
                                                    {vacancies.map(
                                                        ({
                                                            job_title,
                                                        }: any) => {
                                                            return (
                                                                <li>
                                                                    {job_title}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Job Portal &#169; {year}
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
