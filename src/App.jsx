import { useEffect, useState } from 'react';
import Formulario from './components/Formulario.jsx';
import ListaVehiculos from './components/ListaVehiculos.jsx';

const STORAGE_KEY = 'gestion-estacionamientos:vehiculos';

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setVehiculos(JSON.parse(saved));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehiculos));
  }, [vehiculos]);

  const agregarVehiculo = (vehiculo) => {
    setVehiculos((prev) => [vehiculo, ...prev]);
  };

  const eliminarVehiculo = (id) => {
    setVehiculos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <span className="brand-tag">Estacionamiento SPA</span>
          <h1>Control de Parqueo</h1>
        </div>
        <p>Registra ingresos, visualiza ocupación y conserva el historial local.</p>
      </header>

      <main className="app-main">
        <section className="panel-form">
          <h2>Registro de Ingresos</h2>
          <Formulario onSubmit={agregarVehiculo} ocupacion={vehiculos.length} />
        </section>

        <section className="panel-lista">
          <h2>Vehículos en el Patio</h2>
          <ListaVehiculos vehiculos={vehiculos} onEliminar={eliminarVehiculo} />
        </section>
      </main>

      <footer className="app-footer" />
    </div>
  );
}

export default App;
