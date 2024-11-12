import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { cargarTareas, guardarTareas } from "../services/tareasLocalStorage.js";
import { useEffect } from "react";

export function useTareas() {
  const [tareas, setTareas] = useState(() => {
    return cargarTareas();
  });  

  useEffect(() => {
    guardarTareas({ tareas });
  }, [tareas]);

  const nuevaTarea = ({ titulo, descripcion }) => {
    setTareas((prevTareas) => {
      return [
        {
          id: uuidv4(),
          titulo,
          descripcion,
          estado: false,
        },
        ...prevTareas,
      ];
    });
  };

  const buscarTarea = ({ id }) => {
    const tarea = tareas.find(tarea => tarea.id === id);
    return tarea;
  }

  const editarTarea = ({ titulo, descripcion, estado, id }) => {
    setTareas((prevTareas) => {
      return prevTareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            id: id,
            titulo,
            descripcion,
            estado,
          };
        }
        return tarea;
      });
    });
  };

  const eliminarTarea = ({ id }) => {
    setTareas((prevTareas) => {
      return prevTareas.filter((tarea) => tarea.id !== id);
    });
  };

  return { tareas, nuevaTarea, buscarTarea, editarTarea, eliminarTarea }
}