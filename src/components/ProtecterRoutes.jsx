import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtecterRoutes = () => {

    const trainerName = useSelector((store) => store.trainerName.name)

    if (trainerName !== "") {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }

}