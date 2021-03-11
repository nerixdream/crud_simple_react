import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';

const Formulario = ({ tarea, id, setId, tareas, setTarea, modoEdicion, setModoEdicion, setTareas }) => {
	const [error, setError] = useState(false);

	const agregarTarea = e => {
		e.preventDefault();

		if (!tarea.trim()) {
			setError(true);
			return;
		}

		setError(false);

		setTareas([...tareas, { id: nanoid(), tarea }]);

		//Reset al input
		setTarea('');
	};

	//Edita y guarda cambios en la tarea
	const editarTarea = e => {
		e.preventDefault();

		if (!tarea.trim()) {
			setError(true);
			return;
		}

		setError(false);

		const nuevoArrEditado = tareas.map(item => (item.id === id ? { id, tarea } : item));

		setTareas(nuevoArrEditado);
		setModoEdicion(false);
		setId('');
		setTarea('');
	};

	return (
		<Fragment>
			<h4 className='my-3'>{modoEdicion ? 'Editar Tarea' : 'Nueva Tarea'}</h4>
			{error && <p className='text-danger'>El campo está vacío</p>}
			<form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
				<input
					type='text'
					className='form-control'
					placeholder='Agregar Tarea'
					onChange={e => setTarea(e.target.value)}
					value={tarea}
				/>

				{modoEdicion ? (
					<input type='submit' className='btn btn-info btn-block mt-2' value='Guardar Cambios' />
				) : (
					<input type='submit' className='btn btn-dark btn-block mt-2' value='Agregar' />
				)}
			</form>
		</Fragment>
	);
};

export default Formulario;
