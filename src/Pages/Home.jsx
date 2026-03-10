import { Header } from "../components/Header"

export const Home = () => {
    return (

        <>
            <div style={{ backgroundImage: `url("./")` }}>

                <Header />
                <div className="container mt-5">
                    <p>Solo Para Valientes</p>
                    <h1>BIENBENIDOS A LA ZONA <br /> DE TERROR</h1>

                    <div className="d-flex gap-5">
                        <span>2028</span>
                        <span>28 season</span>
                        <span className="border p-1 rounded">TV-HA</span>
                    </div>
                    <br />

                    <div className="d-flex gap-3 align-items-center">
                        <img src="./credit-card.svg" alt="" />
                        <h3>#1 in TV Shows Today</h3>
                    </div>

                    <br />

                    <div className="d-flex ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, <br /> nulla placeat id officiis non consequuntur a, quos at, ipsam praesentium <br /> temporibus odit vel possimus eaque quidem quis eveniet sint.</p>
                    </div>

                    <div className="d-flex gap-5">
                        <button type="button" className="btn btn-info "> 🔻Play</button>
                        <button type="button" className="btn btn-secondary">More info</button>
                    </div>

                    <div className="container text-center">
                        <div className="row mt-5">
                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>

                            <div className="col-3">
                                <img className="border rounded" src="./peliculas.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}