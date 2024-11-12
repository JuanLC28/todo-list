export function guardarTareas({ tareas }) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

export function cargarTareas() {
  const tareas = localStorage.getItem("tareas");
  return tareas ? JSON.parse(tareas) : [];
}