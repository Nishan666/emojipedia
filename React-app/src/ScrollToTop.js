import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//  for Scroll the screen back to to  after any changes
export default function ScrollToTop() {
  const { pathname } = useLocation();    //to get current location / url / data (it returns an Object)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  //scroll back to top , every time the pathname change

  return null;
}