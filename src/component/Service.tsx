import React, { useState, useEffect } from "react";
import ServiceChile from "apps/Services";

const Service = () => {
  const [nval, setnval] = useState<any>("");
  useEffect(() => {
    window.addEventListener("changeText", (ev: any) => {
      setnval(ev.detail.name);
    });
  }, []);
  return (
    <>
      <div className="container-fluid mt-3">
        <h3>Lets Update the Name from Child Apps {nval}</h3>
        <ServiceChile />
      </div>
    </>
  );
};
export default Service;
