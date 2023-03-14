import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const FoodExplorerContext = createContext({});

function FoodExplorerProvider({ children }) {
    const [ data, setData ] = useState({});
    const [ dishes, setDishes ] = useState();
    const [ isLoading, setIsLoading ] = useState(false)

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    const signOut = () => {
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");

        setData({})
    }

    async function updateProfile({user, avatarFile}) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("users/avatar", fileUploadForm);
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

            setData({ user, token: data.token})
            alert("Perfil atualizado!")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");
        const token = localStorage.getItem("@foodexplorer:token");

        if ( user && token ) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({ token, user: JSON.parse(user)})
        }
    }, [])

    return(
        <FoodExplorerContext.Provider
            value={{
                dishes,
                setDishes,
                isLoading,
                setIsLoading,
                signIn, 
                user: data.user, 
                updateProfile,
                signOut,
            }}
        >
            {children}
        </FoodExplorerContext.Provider>
    )
}

const useFoodExplorer = ( ) => {
    const context = useContext(FoodExplorerContext)

    return context;
}

export { FoodExplorerProvider, useFoodExplorer } 