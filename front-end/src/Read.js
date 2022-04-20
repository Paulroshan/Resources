import React, { useEffect, useState } from "react";
import { read } from "./Add";
import { reachone } from "./Connect";

export const Read=(arthi)=>{

    const[employee,setEmployee]=useState({
        "resId":0,
        "resName":"",
        "resArea":"",
        "resPay":0,
        "resSkills":[]
    })

    useEffect(()=>{
        callReading()
    })

    const callReading=async()=>{
        
        const t=await reachone(arthi.who)
        
        setEmployee(t.data)
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-dark text-light">
                        <h1 className="card-title text-center">{employee.resName}</h1>
                        <div className="card-body">
                            <p className="float-start">{employee.resArea}</p>
                            <p className="float-end">{employee.resPay}</p>
                            <p className="text-center">{employee.resSkills}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}