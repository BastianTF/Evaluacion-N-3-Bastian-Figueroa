function CardVehiculo({ vehiculo, onEliminar }) {
  const fecha = new Date(vehiculo.ingreso).toLocaleString('es-CL', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  const tarjetaClase = `card-vehiculo ${vehiculo.permanente ? 'permanente' : 'temporal'}`;

  return (
    <article className={tarjetaClase}>
      <header>
        <div>
          <h3>{vehiculo.placa}</h3>
          <span className="badge">
            {vehiculo.permanente ? 'Permanente' : 'Temporal'}
          </span>
        </div>
        <span>{fecha}</span>
      </header>

      <dl>
        <div>
          <dt>Marca</dt>
          <dd>{vehiculo.marca}</dd>
        </div>
        <div>
          <dt>Color</dt>
          <dd>{vehiculo.color}</dd>
        </div>
        {vehiculo.observacion && (
          <div>
            <dt>Observación</dt>
            <dd>{vehiculo.observacion}</dd>
          </div>
        )}
      </dl>

      <button className="btn-secundario" onClick={() => onEliminar(vehiculo.id)}>
        Retirar vehículo
      </button>
    </article>
  );
}

export default CardVehiculo;
