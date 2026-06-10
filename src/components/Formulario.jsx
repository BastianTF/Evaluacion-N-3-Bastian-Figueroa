import { useState } from 'react';

const PATENTE_REGEX = /^[A-Z]{4}\d{2}$/;

function Formulario({ onSubmit, ocupacion, capacidad, disponibles }) {
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [observacion, setObservacion] = useState('');
  const [permanente, setPermanente] = useState(false);
  const [error, setError] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();

    const placaNormalizada = placa.trim().toUpperCase();
    const marcaNormalizada = marca.trim();
    const colorNormalizado = color.trim();

    if (!placaNormalizada || !marcaNormalizada || !colorNormalizado) {
      setError('Todos los campos obligatorios deben completarse.');
      return;
    }

    if (!PATENTE_REGEX.test(placaNormalizada)) {
      setError('La patente debe tener 4 letras y 2 números, por ejemplo ABCD12.');
      return;
    }

    if (disponibles <= 0) {
      setError('No hay cupos disponibles. Espera a que se retire un vehículo.');
      return;
    }

    setError('');

    onSubmit({
      id: crypto.randomUUID(),
      placa: placaNormalizada,
      marca: marcaNormalizada,
      color: colorNormalizado,
      observacion: observacion.trim(),
      permanente,
      ingreso: new Date().toISOString(),
    });

    setPlaca('');
    setMarca('');
    setColor('');
    setObservacion('');
    setPermanente(false);
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="form-meta">
        <span>Ocupación actual:</span>
        <strong>{ocupacion}</strong>
      </div>
      <div className="form-meta">
        <span>Capacidad total:</span>
        <strong>{capacidad}</strong>
      </div>
      <div className="form-meta">
        <span>Cupos disponibles:</span>
        <strong>{disponibles}</strong>
      </div>

      <label>
        Placa
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          placeholder="ABCD12"
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

      <label className="form-checkbox">
        <input
          type="checkbox"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
        Registro permanente
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

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn-principal" disabled={disponibles <= 0}>
        Registrar ingreso
      </button>
    </form>
  );
}

export default Formulario;
