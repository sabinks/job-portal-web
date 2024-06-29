import { usePage } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";

function Captcha({ onChange, siteKey }: any) {
    return <ReCAPTCHA sitekey={siteKey} onChange={onChange} />;
}

export default Captcha;
