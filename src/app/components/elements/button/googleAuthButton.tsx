import { signIn } from "next-auth/react";
import Button from "./button";

const GoogleAuthButton = () => {
    return (
        <Button
            className="btn__google"
            onClick={() => signIn("google")}
        >
            Войти через Google
        </Button>
    );
};

export default GoogleAuthButton