import { useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function NuevaTarea({ nuevaTarea }) {
  const idTitulo = useId();
  const idDescripcion = useId();
  const navegar = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    nuevaTarea({
      titulo: document.getElementById(idTitulo).value,
      descripcion: document.getElementById(idDescripcion).value,
    });
    navegar('/');
  };

  return (
    <>
      <header>
        <h1>Nueva Tarea</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          deleniti?
        </p>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" id={idTitulo} placeholder="Título" required />
          <textarea
            id={idDescripcion}
            placeholder="Descripción de la tarea"
            required
          ></textarea>
          <div className="form-botones">
            <Link to="/">
              <button>Cancelar</button>
            </Link>
            <button>Crear Tarea</button>
          </div>
        </form>
      </section>
    </>
  );
}
