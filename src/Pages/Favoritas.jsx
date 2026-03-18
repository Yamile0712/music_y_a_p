
import {Container}  from "../components/Container"

export const Favoritas = () => {
    return (

        <>
            <div style={{ color: "white" }}>
                <div className="container ">
                    <p >Recuerda Tu Mundo Sangriento</p>
                    <h1 >COLECCIÓN DE FAVORITOS</h1>

                    <div className="d-flex gap-5">
                        <img src="./download.svg" alt="" />
                        <img src="./heart.svg" alt="" />
                        <img src="./pencil.svg" alt="" />
                        <img src="./trash.svg" alt="" />
                    </div>
                    <br />

                    <div className="d-flex gap-3 align-items-center">
                        < img src="./sparkles-2.svg" alt="" />
                        <h3> #2 Explore Your Created World </h3>

                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row mt-5 container">
                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga1.jpg"
                            />
                        </div>
                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga2.jpg"
                            />
                        </div>
                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga3.jpg"
                            />
                        </div>
                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga4.jpg"
                            />
                        </div>

                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga5.jpg"
                            />
                        </div>

                        <div className="col-md-4">
                            <Container
                                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                imagen="./descarga5.jpg"
                            />
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}