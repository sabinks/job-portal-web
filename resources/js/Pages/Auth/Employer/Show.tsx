import { usePage } from "@inertiajs/react";
import React from "react";

function Show() {
    const {
        props: { employer },
    } = usePage<any>();
    employer;
    return <div>Show</div>;
}

export default Show;
