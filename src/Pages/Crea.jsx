import { Header } from "../components/Header";

export const Crea = () => {
    return (

        <>

            <div style={{ backgroundImage: `url("./portada-final.png")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                <Header />

                <div className="container mt-5">
                    <p>Crea Un Nuevo Mundo Que Otros Puedan Ver</p>
                    <h1>ZONA ESPECIAL</h1>

                    <div className="d-flex gap-5">
                        <img src="./paperclip.svg" alt="" />
                        <img src="./pencil.svg" alt="" />
                        <img src="./heart.svg" alt="" />
                    </div>
                    <br />

                    <div className="d-flex gap-3 align-items-center">
                        <img src="./credit-card.svg" alt="" />
                        <h3>#4 in TV Shows Today</h3>
                    </div>

                    <br />

                    <div className="d-flex ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae, <br /> nulla placeat id officiis non consequuntur a, quos at, ipsam praesentium <br /> temporibus odit vel possimus eaque quidem quis eveniet sint.</p>
                    </div>
                </div>
                <br />
                <br />

                <div className=" container d-flex gap-3" >
                    <img src="./ultima.avif" className=" w-25 border rounded" alt="..."></img>
                    <div>
                        <img src="./ultima.avif" className=" w-25 border rounded" alt="..."></img>

                    </div>

                </div>

                <br />
                <br />


                <br />
                <br />
                <br />
            </div>
        </>
    )
}