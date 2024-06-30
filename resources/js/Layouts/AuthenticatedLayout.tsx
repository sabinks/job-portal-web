import {
    Fragment,
    useEffect,
    useState,
    PropsWithChildren,
    ReactNode,
} from "react";

import { Dialog, Menu, Transition } from "@headlessui/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { User } from "@/types";
import {
    AcademicCapIcon,
    BanknotesIcon,
    Bars3Icon,
    BookmarkIcon,
    BookmarkSlashIcon,
    BookmarkSquareIcon,
    BuildingLibraryIcon,
    ChatBubbleBottomCenterIcon,
    ChatBubbleLeftIcon,
    ChatBubbleLeftRightIcon,
    CircleStackIcon,
    Cog6ToothIcon,
    DocumentPlusIcon,
    GlobeAltIcon,
    HomeIcon,
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon,
    NewspaperIcon,
    QueueListIcon,
    StarIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { checkSubset, classNames } from "@/utils";

const navigation = [
    {
        name: "Dashboard",
        route: "/auth/dashboard",
        href: "dashboard",
        icon: HomeIcon,
        roles: ["Superadmin"],
        permission: "",
    },
    {
        name: "Vacancy",
        route: "auth-vacancy.index",
        href: "/auth/vacancy",
        icon: UserIcon,
        roles: ["Superadmin"],
        permission: "",
    },
];
const userNavigation = [
    { name: "Your Profile", href: "/auth/profile", route: "/auth/profile" },
];
export default function Authenticated({
    user,
    flash,
    header,
    children,
}: PropsWithChildren<{
    user: User;
    flash: { message: string };
    header?: ReactNode;
}>) {
    const [query, setQuery] = useState<string>("");
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        // <div className="min-h-screen bg-gray-100">
        //     <nav className="bg-white border-b border-gray-100">
        //         {flash?.message && (
        //             <div
        //                 className="flex items-center bg-blue-500 text-black text-sm font-bold px-4 py-3"
        //                 role="alert"
        //             >
        //                 <svg
        //                     className="fill-current w-4 h-4 mr-2"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 20 20"
        //                 >
        //                     <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        //                 </svg>
        //                 <p>{flash.message}</p>
        //             </div>
        //         )}
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="shrink-0 flex items-center">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink
        //                             href={route("dashboard")}
        //                             active={route().current("dashboard")}
        //                         >
        //                             Dashboard
        //                         </NavLink>
        //                     </div>
        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink
        //                             href={route("role.permissions")}
        //                             active={route().current("role-permissions")}
        //                         >
        //                             Role/Permissions
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:flex sm:items-center sm:ms-6">
        //                     <div className="ms-3 relative">
        //                         <Dropdown>
        //                             <Dropdown.Trigger>
        //                                 <span className="inline-flex rounded-md">
        //                                     <button
        //                                         type="button"
        //                                         className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
        //                                     >
        //                                         {user.name}

        //                                         <svg
        //                                             className="ms-2 -me-0.5 h-4 w-4"
        //                                             xmlns="http://www.w3.org/2000/svg"
        //                                             viewBox="0 0 20 20"
        //                                             fill="currentColor"
        //                                         >
        //                                             <path
        //                                                 fillRule="evenodd"
        //                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                                 clipRule="evenodd"
        //                                             />
        //                                         </svg>
        //                                     </button>
        //                                 </span>
        //                             </Dropdown.Trigger>

        //                             <Dropdown.Content>
        //                                 <Dropdown.Link
        //                                     href={route("profile.edit")}
        //                                 >
        //                                     Profile
        //                                 </Dropdown.Link>
        //                                 <Dropdown.Link
        //                                     href={route("logout")}
        //                                     method="post"
        //                                     as="button"
        //                                 >
        //                                     Log Out
        //                                 </Dropdown.Link>
        //                             </Dropdown.Content>
        //                         </Dropdown>
        //                     </div>
        //                 </div>

        //                 <div className="-me-2 flex items-center sm:hidden">
        //                     <button
        //                         onClick={() =>
        //                             setShowingNavigationDropdown(
        //                                 (previousState) => !previousState
        //                             )
        //                         }
        //                         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        //                     >
        //                         <svg
        //                             className="h-6 w-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={
        //                                     !showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={
        //                                     showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className={
        //                 (showingNavigationDropdown ? "block" : "hidden") +
        //                 " sm:hidden"
        //             }
        //         >
        //             <div className="pt-2 pb-3 space-y-1">
        //                 <ResponsiveNavLink
        //                     href={route("dashboard")}
        //                     active={route().current("dashboard")}
        //                 >
        //                     Dashboard
        //                 </ResponsiveNavLink>
        //             </div>

        //             <div className="pt-4 pb-1 border-t border-gray-200">
        //                 <div className="px-4">
        //                     <div className="font-medium text-base text-gray-800">
        //                         {user.name}
        //                     </div>
        //                     <div className="font-medium text-sm text-gray-500">
        //                         {user.email}
        //                     </div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route("profile.edit")}>
        //                         Profile
        //                     </ResponsiveNavLink>
        //                     <ResponsiveNavLink
        //                         method="post"
        //                         href={route("logout")}
        //                         as="button"
        //                     >
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        //                 {header}
        //             </div>
        //         </header>
        //     )}
        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">
        //                     <main>{children}</main>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div onClick={() => setQuery("")} className={``}>
            {flash?.message && (
                <div
                    className="flex items-center justify-center bg-blue-500 text-black text-sm font-bold px-4 py-3"
                    role="alert"
                >
                    <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p>{flash.message}</p>
                </div>
            )}
            {/* <div className="relative">{JSON.stringify(route().current())}</div> */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 md:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex  flex-col max-w-xs w-full pt-5 pb-4 bg-primary">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6 text-black"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </Transition.Child>
                            <Link href="/">
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="/assets/logo_small.png"
                                        alt={"Job Portal"}
                                        width="100"
                                        height="100"
                                    />
                                    <p className="font-extrabold text-black px-3 text-xl">
                                        {"Job Portal"}
                                    </p>
                                </div>
                            </Link>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                {
                                    <>
                                        <nav className="px-2 space-y-1">
                                            {navigation.map(
                                                (item: any) =>
                                                    checkSubset(
                                                        ["has"],
                                                        "has"
                                                    ) && (
                                                        // show(item?.permission) &&
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                route().current(
                                                                    item.current
                                                                )
                                                                    ? "bg-white text-black font-semibold"
                                                                    : "text-primary hover:text-black hover:white hover:font-semibold",
                                                                "group flex items-center px-1 py-1.5 text-base rounded-md"
                                                            )}
                                                            onClick={() =>
                                                                setSidebarOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <item.icon
                                                                className="mr-4 flex-shrink-0 h-6 w-6  "
                                                                aria-hidden="true"
                                                            />
                                                            {item.name}
                                                        </Link>
                                                    )
                                            )}
                                        </nav>
                                        {/* <Link
                                            href={'/auth/setting'}
                                            className={
                                                classNames(
                                                    router?.asPath === '/auth/setting'
                                                        ? "bg-white text-black font-semibold"
                                                        : "text-primary2 hover:text-black hover:white hover:font-semibold",
                                                    "group text-black flex items-center px-2 mb-3 py-1 space-x-2 text-base rounded-md"
                                                )
                                            }

                                        >
                                            <Cog6ToothIcon className="w-5" />
                                            <span>Setting</span>
                                        </Link> */}
                                    </>
                                }
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col  flex-grow pt-5 bg-primary overflow-y-auto">
                    <Link href="/">
                        <div className="flex items-center flex-shrink-0 px-2">
                            {/* <Image
                                className="h-8 w-auto"
                                src="/assets/logo_small.png"
                                alt={"Job Portal" ? "Job Portal" : ""}
                                width="100"
                                height="100"
                            /> */}
                            <p className="font-extrabold text-black px-3 text-xl">
                                {"Job Portal"}
                            </p>
                        </div>
                    </Link>

                    <div className="mt-5 flex-1 flex flex-col">
                        {
                            <>
                                <nav className="flex-1 px-1 pb-2 space-y-1">
                                    {navigation.map(
                                        (item: any) =>
                                            checkSubset(["has"], "has") && (
                                                // show(item?.permission) &&
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        route().current(
                                                            item.route
                                                        )
                                                            ? "bg-accent2 text-darkgray"
                                                            : "text-lightgray hover:text-darkgray",
                                                        "group rounded-md text-darkgray flex items-center px-2 py-1.5 rounded-md hover:bg-accent2 transition duration-300"
                                                    )}
                                                >
                                                    <item.icon
                                                        className="mr-3 flex-shrink-0 h-5 w-5 "
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            )
                                    )}
                                </nav>
                                {/* <Link
                                    href={'/auth/setting'}
                                    className={
                                        classNames(
                                            router?.asPath === '/auth/setting'
                                                ? "bg-white text-black font-semibold"
                                                : "text-primary2 hover:text-black hover:white hover:font-semibold",
                                            "group text-black flex items-center px-2 mb-3 py-1 space-x-2 text-base rounded-md"
                                        )
                                    }
                                >
                                    <Cog6ToothIcon className="w-5" />
                                    <span>Setting</span>
                                </Link> */}
                            </>
                        }
                    </div>
                </div>
            </div>

            <div className="md:pl-60 flex flex-col">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-12 bg-white shadow">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cerulean-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex items-center">
                            {true && (
                                <div>
                                    {/* <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassCircleIcon className="h-7 w-7" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field1"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Search"
                                            type="text"
                                            value={query}
                                            autoComplete="off"
                                            onChange={(e) => setQuery(e.target.value)}
                                            name="search"
                                            defaultValue={query}
                                        />
                                    </div> */}
                                </div>
                            )}
                        </div>
                        {/* {
                            searchdata?.data.length > 0 &&

                            <div className={classNames("absolute top-16 bg-white w-2/3 h-64 z-10 p-3 overflow-y-auto border border-gray-100 shadow-lg rounded-bl-lg rounded-br-lg", !searchdata?.data.length ? "h-40 flex justify-center items-center" : "")}>
                                {
                                    searchdata.data.length > 0 ?
                                        <>
                                            {
                                                searchdata?.data?.map((el: any) => (
                                                    <div key={el.id}
                                                        className="py-3 hover:bg-primary text-gray-800  group hover:text-black rounded-md pl-2 cursor-pointer"
                                                        onClick={() => handleSearch(el.id, el.roles[0]?.name)}
                                                    >
                                                        <span className="flex gap-x-2 items-center">
                                                            <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-400 group-hover:text-black" aria-hidden="true" />
                                                            <span className=" group-hover:text-black">
                                                                {el.name}
                                                            </span>
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </>
                                        :
                                        <div className="text-center text-red-400  font-medium">
                                            <h1>!! No Data Found !!</h1>
                                        </div>
                                }
                            </div>
                        } */}
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* <span className='sr-only'>View notifications</span> */}
                            {/* <NotificationPopOver /> */}

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-6 relative">
                                <div className="flex items-center gap-x-4">
                                    <h1 className="font-bold text-gray-dark">
                                        {/* {name} */}
                                    </h1>
                                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        {false ? (
                                            // <Image
                                            //     className="h-8 w-8 rounded-full"
                                            //     src={`${BACKEND_URL}/storage/profile_image/${profile_image}`}
                                            //     height={200}
                                            //     width={200}
                                            //     alt="Profile Image Image"
                                            // />
                                            <div className="">Image</div>
                                        ) : (
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={
                                                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                }
                                                alt="Profile Image"
                                            />
                                        )}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({
                                                    active,
                                                }: {
                                                    active: boolean;
                                                }) => (
                                                    <div>
                                                        {item.href ? (
                                                            <Link
                                                                href={item.href}
                                                                onClick={() => {}}
                                                                className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                                                                    active
                                                                        ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                                                                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                                                                } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ) : (
                                                            <span
                                                                className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                                                                    active
                                                                        ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                                                                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                                                                } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
                                                                onClick={() => {
                                                                    // handleSignout();
                                                                }}
                                                            >
                                                                {item.name}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        ))}

                                        <ResponsiveNavLink
                                            method="post"
                                            href={route("logout")}
                                            as="button"
                                        >
                                            Log Out
                                        </ResponsiveNavLink>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="py-2 px-4 max-w-full">{children}</main>
            </div>
        </div>
    );
}
