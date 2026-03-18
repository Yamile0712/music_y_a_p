import React from "react";

export const Imagenes = ({  imagen }) => {
    return (
        <div >
            <div className="row mt-5 gap-2 justify-content-center">
                <div >
                    <img  className="border rounded"src={imagen} alt="" />
                </div>

            </div>
            <br />
            <br />
            <br />
        </div>
    );
}