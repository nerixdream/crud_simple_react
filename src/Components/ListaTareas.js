import React, { Fragment } from 'react';

const ListaTareas = ({ tareas, setId, setTarea, setTareas, setModoEdicion }) => {
	//Eliminar Tareas
	const eliminarTarea = id => {
		//Filtra la tarea seleccionada
		const nuevoArrTareas = tareas.filter(tarea => tarea.id !== id);

		setTareas(nuevoArrTareas);
	};

	//Editar Tarea
	const editarTarea = tarea => {
		setModoEdicion(true);
		setTarea(tarea.tarea);
		setId(tarea.id);
	};

	return (
		<Fragment>
			<h4 className='my-3'>Lista de Tareas</h4>
			<ul className='list-group'>
				{tareas.length === 0 ? (
					<li className='list-group-item'>
						<span className='lead'>No hay Tareas</span>
					</li>
				) : (
					tareas.map(tarea => (
						<li className='list-group-item' key={tarea.id}>
							<span className='lead'>{tarea.tarea}</span>
							<button
								className='btn btn-danger float-right ml-2'
								onClick={() => eliminarTarea(tarea.id)}>
								Eliminar
							</button>
							<button className='btn btn-warning float-right' onClick={() => editarTarea(tarea)}>
								Editar
							</button>
						</li>
					))
				)}
			</ul>
		</Fragment>
	);
};

export default ListaTareas;
