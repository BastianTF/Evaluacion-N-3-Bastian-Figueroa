function CardVehiculo({ vehiculo, onEliminar }) {
  const fecha = new Date(vehiculo.ingreso).toLocaleString('es-CL', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <article className="card-vehiculo">
      <header>
        <h3>{vehiculo.placa}</h3>
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
