import {Routes, Route} from "react-router-dom"
import { publicRoutes } from "../constant/routes"
export default function RoutesPages() {
  return (
  <Routes>
    {publicRoutes.map((route, index)=>(
        <Route key={index} path={route.path} element={<route.element/>} />
    ))}
  </Routes>
  )
}
