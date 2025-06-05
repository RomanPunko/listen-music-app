import { useEffect } from "react";
import { useAppSelector } from "./app-hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuthRedirect = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect") || "/home";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
      window.location.reload()
    }
  }, [isAuthenticated, redirect, navigate]);
};
