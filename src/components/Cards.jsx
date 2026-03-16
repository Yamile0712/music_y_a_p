export const Cards = ({ titulo, descripcion, imagen }) => {
    return (
        
        <div className="card" style={{ width: '18rem', background: 'black', color: 'white', border: '1px solid white' }}>

            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="#" className="btn btn-secondary">Explora...</a>
            </div>
        </div>
    );
}