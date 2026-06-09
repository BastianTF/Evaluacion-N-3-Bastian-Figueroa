import CardVehiculo from './CardVehiculo.jsx';

function ListaVehiculos({ vehiculos, onEliminar }) {
  if (vehiculos.length === 0) {
    return <p className="empty-state">No hay vehículos registrados todavía.</p>;
  }

  return (
    <div className="lista-vehiculos">
      {vehiculos.map((vehiculo) => (
        <CardVehiculo
          key={vehiculo.id}
          vehiculo={vehiculo}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
}

export default ListaVehiculos;
