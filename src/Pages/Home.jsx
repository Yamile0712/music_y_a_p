import { Header } from "../components/Header";
import { Imagenes } from "../components/Imagenes"

export const Home = () => {
    return (

        <>
            <div style={{ backgroundImage: `url("./portada-final.png")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>


                <div className="container mt-5">
                    <p>Tu Musica</p>
                    <h1>BIENVENIDO <br />A TU ZONA DE MUSICA</h1>

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


                    <div className="d-flex justify-content-center gap-4">
                        <div style={{ width: "250px", height: "260px", objectFit: "cover" }}>
                            <Imagenes
                                imagen="./descarga8.jpg"
                            /></div>

                        <div style={{ width: "250px", height: "260px", objectFit: "cover" }}>
                            <Imagenes
                                imagen="./descarga5.jpg"
                            /></div>

                        <div style={{ width: "250px", height: "260px", objectFit: "cover" }}>
                            <Imagenes
                                imagen="./descarga15.jpg"
                            /></div>

                            
                        <div style={{ width: "250px", height: "260px", objectFit: "cover" }}>
                            <Imagenes
                                imagen="./descarga3.jpg"
                            /></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />


                </div>
            </div>

        </>

    )
}