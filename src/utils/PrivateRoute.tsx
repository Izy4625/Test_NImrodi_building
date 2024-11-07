import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const AccessFlors = useSelector((state: RootState) => state.floorreducer.flooraccess);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const floorIndex = Number(id);
      if (AccessFlors[floorIndex] === false) {
        setHasAccess(false);
        navigate("/forbidden");
      } else {
        setHasAccess(true);
      }
    }
  }, [id, AccessFlors, navigate]);

  if (hasAccess === null) {
    return <Forbidden />;
  }

  if (!hasAccess) {
    return <Forbidden />;
  }

  return <>{children}</>;
};

export default PrivateRoute;