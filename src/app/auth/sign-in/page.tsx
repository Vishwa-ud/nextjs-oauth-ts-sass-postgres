import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
import { SignInPage } from "./signin";
import { redirect } from "next/navigation";

//Gatekeeper component to wrap the SignInPage
const SignIn: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (isAuthenticated) {
        redirect('/dashboard');
    } else {
        return <SignInPage />;
    }
    
};

export default SignIn;