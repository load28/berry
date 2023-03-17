import React, {useState} from "react";
import CacheDynamicComponent from "../CacheDynamicComponent";

const Test: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  setTimeout(() => {
    setIsShow(true);
  }, 8000);

  return (
    <div>
      {
        <CacheDynamicComponent module={'./LoginPage'}></CacheDynamicComponent>
      }
      {
        isShow &&  <CacheDynamicComponent module={'./LoginPage'}></CacheDynamicComponent>
      }
    </div>
  )
}

export default Test;
