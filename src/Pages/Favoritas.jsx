import { Header } from "../components/Header"

export const Favoritas = () => {
    return (

        <>

            <div style={{ backgroundImage: `url("./portada-final.png")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>

                <Header />

                <div>

                    <div className="container mt-5">
                        <p>Recuerda Tu Mundo Sangriento</p>
                        <h1>COLECCIÓN DE FAVORITOS</h1>

                        <div className="d-flex gap-5">
                            <img src="./download.svg" alt="" />
                            <img src="./heart.svg" alt="" />
                            <img src="./pencil.svg" alt="" />
                            <img src="./trash.svg" alt="" />
                        </div>
                        <br />

                        <div className="d-flex gap-3 align-items-center">
                            <img src="./sparkles-2.svg" alt="" />
                            <h3>#2 Explore Your Created World </h3>

                        </div>
                    </div>

                    <div className="container text-center ">
                        <div className="row mt-5">
                            <div className="col-3">
                                <img className="border rounded" src="./descarga1.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga2.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga3.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga4.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-3">
                                <img className="border rounded" src="./descarga5.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga6.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga7.jpg" alt="" />
                                <br />
                                <br />
                                <img  className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./descarga8.jpg" alt="" />
                                <br />
                                <br />
                                <img className="d-flex text-end" src="./heart.svg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>

            </div>

        </>
    )
}