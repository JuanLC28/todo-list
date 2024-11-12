import { useId } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export function EliminarTarea({ buscarTarea, eliminarTarea }) {
  const { id } = useParams();
  const navegar = useNavigate();
  const idTitulo = useId();
  const idDescripcion = useId();
  const idEstado = useId();

  useEffect(() => {
    const tareaEncontrada = buscarTarea({ id });
    if (tareaEncontrada === undefined) {
      navegar('/');
    } else {
      document.getElementById(idTitulo).value = tareaEncontrada.titulo;
      document.getElementById(idDescripcion).value =
        tareaEncontrada.descripcion;
      document.getElementById(idEstado).value = tareaEncontrada.estado
        ? 'Terminada'
        : 'Sin Terminar';
    }
  }, []);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    eliminarTarea({ id });
    navegar('/');
  };

  return (
    <>
      <header>
        <h1>Eliminar Tarea</h1>
        <p>Eliminado la Tarea con ID: {id.slice(0, 6)} <br />¿Esta seguro de eliminar está Tarea?</p>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" id={idTitulo} readOnly />
          <textarea id={idDescripcion} readOnly></textarea>
          <input type="text" id={idEstado} readOnly />
          <div className="form-botones">
            <Link to="/">
              <button>Cancelar</button>
            </Link>
            <button>Eliminar Tarea</button>
          </div>
        </form>
      </section>
    </>
  );
}
