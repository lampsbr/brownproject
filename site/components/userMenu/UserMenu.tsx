import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import UserMenuError from "./UserMenuError";
import UserMenuLoading from "./UserMenuLoading";

export default function UserMenu() {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
    } = useAuth0();

    if (isLoading) {
        return <UserMenuLoading />
    }

    if (error) {
        console.error('Error in authentication', error);
        return <UserMenuError />
    }

    if (isAuthenticated) {
        console.log('isAuthenticated!', user);
    }

    // useEffect(() => {
    //     (async () => {
    //         try{
    //             const token = await getAccessTokenSilently({});
    //             console.log('token', token);
    //         } catch(e){
    //             console.error(e);
    //         }
    //     })();
    // }, [isAuthenticated]);

    return (<li><div className="w-48 h-16 bg-tumbleweed rounded-full flex items-center justify-between shadow-lg">
        {
            isAuthenticated ? <>
                <img src={user?.picture ?? ''} alt={user?.name ?? ''} className="inline object-scale-down h-full rounded-full" />
                <button className="h-16 text-honeydew px-3 py-4 bg-darkliver rounded-full float-right" onClick={(e: any) => { e.preventDefault(); logout(); }}>logout</button></> : (
                <button className="h-16 text-base px-3 py-2 bg-tumbleweed rounded-full" onClick={loginWithRedirect}>Enter the project!</button>
            )

        }
    </div></li>);


}