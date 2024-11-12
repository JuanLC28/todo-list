import { TablaItemTareas } from './TablaItemTareas';

export function TablaTareas({ tareas }) {
  return (
    <section>
      <table style={{
        display: "table"
      }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tareas.map((tarea) => (
            <TablaItemTareas
              key={tarea.id}
              tarea={tarea}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
