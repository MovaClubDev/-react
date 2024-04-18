import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { initProjectListAsync } from "./state/projectsSlice";

import Test from "./components/Test.jsx"

import "./styles.css";
export default function App() {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);

    useEffect(() => {
        dispatch(initProjectListAsync())
    }, [])

    useEffect(() => {
        console.log('App cmp render; projects - ', projects);
    })

    return(
    <>
        <Test projectList={projects.projectList.data}></Test>
    </>)
}