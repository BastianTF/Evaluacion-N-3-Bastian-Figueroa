import { useState } from 'react';

function Formulario({ onSubmit, ocupacion }) {
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [observacion, setObservacion] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();

    if (!placa.trim() || !marca.trim() || !color.trim()) {
      return;
    }

    onSubmit({
      id: crypto.randomUUID(),
      placa: placa.trim().toUpperCase(),
      marca: marca.trim(),
      color: color.trim(),
      observacion: observacion.trim(),
      ingreso: new Date().toISOString(),
    });

    setPlaca('');
    setMarca('');
    setColor('');
    setObservacion('');
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="form-meta">
        <span>Ocupación actual:</span>
        <strong>{ocupacion}</strong>
      </div>

      <label>
        Placa
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          placeholder="ABC1234"
          required
        />
      </label>

      <label>
        Marca
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          placeholder="Toyota, Hyundai, BMW"
          required
        />
      </label>

      <label>
        Color
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Rojo, Azul, Blanco"
          required
        />
      </label>

      <label>
        Observación
        <textarea
          value={observacion}
          onChange={(e) => setObservacion(e.target.value)}
          placeholder="Información adicional opcional"
          rows="3"
        />
      </label>

      <button type="submit" className="btn-principal">
        Registrar ingreso
      </button>
    </form>
  );
}

export default Formulario;
