import { Routes, Route } from "react-router-dom"
import { AllRoutes } from "../constant/routes"
export default function HomePageRouter() {
  return (
    <Routes>
    {AllRoutes.map((route, index)=>(
        <Route key={index} path={route.path} element={<route.element/>} />
    ))}
</Routes>
  )
}
