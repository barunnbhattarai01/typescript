"use client"
import { useRef,useEffect } from "react";
import { gsap } from "gsap";

function Hello(){
 const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, y: -50 },  // start: invisible and moved up
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }  // animate to visible and original position
    );
  }, []);
    return(
        <>
        <div className="h-screen w-auto flex justify-center items-center">
        <div ref={divRef} className="">

    <p> Hello World</p>


        </div>

        <div className=" text-2xl flex justify-center items-center ">
         <span className="  inline-block p-1 border   border-black  ">   Float</span>
        </div>
        </div>
        </>
    )
}

export default Hello;