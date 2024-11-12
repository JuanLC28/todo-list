import { Routes, Route } from 'react-router-dom';
import { useTareas } from './hooks/useTareas';
import { ListaTareas } from './components/ListaTareas';
import { NuevaTarea } from './components/NuevaTarea';
import { EditarTarea } from './components/EditarTarea';
import { EliminarTarea } from './components/EliminarTarea';

function App() {
  const { tareas, nuevaTarea, buscarTarea, editarTarea, eliminarTarea } =
    useTareas();

  return (
    <main>
      <Routes>
        <Route
          path="/nueva-tarea"
          element={<NuevaTarea nuevaTarea={nuevaTarea} />}
        />

        <Route
          path="/editar-tarea/:id"
          element={
            <EditarTarea buscarTarea={buscarTarea} editarTarea={editarTarea} />
          }
        />

        <Route
          path="/eliminar-tarea/:id"
          element={
            <EliminarTarea
              buscarTarea={buscarTarea}
              eliminarTarea={eliminarTarea}
            />
          }
        />

        <Route path="*" element={<ListaTareas tareas={tareas} />} />
      </Routes>
    </main>
  );
}

export default App;
