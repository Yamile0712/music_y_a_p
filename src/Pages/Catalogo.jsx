import React from "react";
import { Header } from "../components/Header";
import { Cards} from "../components/Cards";

export const Catalogo = () => {
    return (
        <>
            <div style={{ backgroundImage: `url("./portada-final.png")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              
                <div className="container mt-5">
                    <p>Recuerda Que puedes Expander Tu Dominio</p>
                    <h1>EXPLORA NUEVOS MUNDOS MUSICALES</h1>
                    <br />
                    <div className="d-flex gap-3 align-items-center">
                        <img src="./sparkles-2.svg" alt="" />
                        <h3>#3 Explore Your Created World</h3>
                    </div>

                    <br />

                    <div className="d-flex">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, <br /> nulla placeat id officiis non consequuntur a, quos at, ipsam praesentium <br /> temporibus odit vel possimus eaque quidem quis eveniet sint.</p>
                    </div>
                </div>

                <div className="container text-center mt-5 d-flex gap-3 flex-wrap justify-content-center">
                    <Cards
                        titulo="Card 1"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga3.jpg"
                    />
                    <Cards
                        titulo="Card 2"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga4.jpg"
                    />
                    <Cards
                        titulo="Card 3"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga5.jpg"
                    />
                    <Cards
                        titulo="Card 4"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga6.jpg"
                    />
                    <Cards
                        titulo="Card 5"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga7.jpg"
                    />
                    <Cards
                        titulo="Card 6"
                        descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imagen="./descarga9.jpg"
                    />
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

