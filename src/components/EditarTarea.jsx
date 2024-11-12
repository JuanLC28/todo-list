import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export function EditarTarea({ buscarTarea, editarTarea }) {
  const { id } = useParams();
  const navegar = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState(false);

  useEffect(() => {
    const tareaEncontrada = buscarTarea({ id });
    if (tareaEncontrada === undefined) {
      navegar('/');
    } else {
      setTitulo(tareaEncontrada.titulo);
      setDescripcion(tareaEncontrada.descripcion);
      setEstado(tareaEncontrada.estado);
    }
  }, []);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    editarTarea({ titulo, descripcion, estado, id });
    navegar('/');
  };

  return (
    <>
      <header>
        <h1>Editar Tarea</h1>
        <p>Editando la Tarea con ID: {id.slice(0, 6)}</p>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
            required
          />
          <textarea
            placeholder="Descripción de la tarea"
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
            required
          ></textarea>
          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                setEstado(e.target.checked);
              }}
              checked={estado}
            />
            {estado ? 'Terminada' : 'Sin Terminar'}
          </label>
          <div className="form-botones">
            <Link to="/">
              <button>Cancelar</button>
            </Link>
            <button>Actualizar Tarea</button>
          </div>
        </form>
      </section>
    </>
  );
}
