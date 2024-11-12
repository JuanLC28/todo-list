import { Link } from 'react-router-dom';
import { Edit, Trash } from './Icons.jsx';

export function TablaItemTareas({ tarea }) {
  return (
    <tr key={tarea.id}>
      <td>{tarea.id.slice(0, 6)}</td>
      <td>{tarea.titulo}</td>
      <td>{tarea.descripcion}</td>
      <td>{tarea.estado ? 'Terminada' : 'Sin Terminar'}</td>
      <td>
        <Link to={`/editar-tarea/${tarea.id}`}>
          <button>
            <Edit />
          </button>
        </Link>
        <Link to={`/eliminar-tarea/${tarea.id}`}>
          <button>
            <Trash />
          </button>
        </Link>
      </td>
    </tr>
  );
}
