import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function Index({
    auth,
    flash,
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
            <AuthenticatedLayout
                user={auth.user}
                flash={flash}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Vacancy
                    </h2>
                }
            >
                <Head title="Vacancy" />
                <div className="text-black/50 ">
                    <div className="relative min-h-screen flex justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
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
                                                                slug,
                                                            }: any) => {
                                                                return (
                                                                    <li>
                                                                        <a
                                                                            href={route(
                                                                                "auth-vacancy.edit",
                                                                                slug
                                                                            )}
                                                                        >
                                                                            {
                                                                                job_title
                                                                            }
                                                                        </a>
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
            </AuthenticatedLayout>
        </>
    );
}
