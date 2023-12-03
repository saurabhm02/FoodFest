import { useRouteError } from "react-router-dom";


const Error =() =>{
  const err = useRouteError();
  // console.log(err);
    return(
      <>
        <h1>ooh Bhai 😮</h1>
        <h3>{" ' " + err?.status + " :  " + err?.statusText + " ' "}</h3>
        <h2> Ab tu dekh, Beta 😎</h2>
        <h2>Ab tu Gya , Ab Main tujhe teri aukat dikhata hu😆😆</h2>
      </>  
    );
};
export default Error;