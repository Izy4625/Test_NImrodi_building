import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {RootState}  from "../store/store";
import Forbidden from "../pages/Forbidden/Forbidden";
interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const [index1, setIndex1] = useState<number>(0)
    const [bool, setBool] = useState<boolean>(false)
    const {flooraccess} = useSelector((state: RootState)=>state.floorreducer)
    const { index } = useParams<{ index: string }>();
    const navigate = useNavigate()
    if(!index) return
    setIndex1(Number(index))
    setBool(flooraccess[index1])
    if(!bool) {
        navigate("/Forbiiden")
    }
    return (
      <>
      {component}
      </>
    )
   
};

export default PrivateRoute