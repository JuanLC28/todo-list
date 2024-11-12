import { TablaTareas } from './TablaTareas';
import { Link } from 'react-router-dom';

export function ListaTareas({ tareas }) {
  return (
    <>
      <header>
        <h1>Lista de Tareas</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          deleniti?
        </p>

        <Link to="/nueva-tarea">
          <button>Nueva tarea</button>
        </Link>
      </header>

      <TablaTareas tareas={tareas} />
    </>
  );
}
