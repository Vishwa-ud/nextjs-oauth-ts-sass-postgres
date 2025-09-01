import { SignInPage } from "./signin";
import { redirect } from "next/navigation";

//Gatekeeper component to wrap the SignInPage
const SignIn: React.FC = () => {
    // TODO: Replace with actual authentication check logic
    const isAuthenticated = true; // Replace with actual authentication logic
    //const isAuthenticated = await checkIsAuthenticated();
    if (isAuthenticated) {
        redirect('/dashboard');
    } else {
        return <SignInPage />;
    }
    
};

export default SignIn;