import React from "react";

export const Container = ({ texto, imagen }) => {
    return (
        <div className="text-center " style={{ width: "300px", height: "400px" }}>

            <br />
            <img className="border rounded" src={imagen} alt="" />
            <br />
            <br />
            <img className="d-flex text-end" src="./heart.svg" alt="" />
            <p className="text-center align-items-center">{texto}</p>
        </div>
    );
}