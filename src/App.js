import React, { useState } from 'react';
import Formulario from './Components/Formulario';
import ListaTareas from './Components/ListaTareas';

const App = () => {
    const [tarea, setTarea] = useState('');
    const [id, setId] = useState('')
    const [tareas, setTareas] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)

	return (
		<div className='container mt-5'>
			<h1 className='text-center'>CRUD Simple</h1>
			<hr />
            <div className="row">
                <div className="col-md-8">
                    <ListaTareas 
                        tareas={tareas} 
                        setTarea={setTarea}
                        setId={setId} 
                        setTareas={setTareas} 
                        setModoEdicion={setModoEdicion} 
                    />
                </div>
                <div className="col-md-4">
                    <Formulario 
                        tarea={tarea}
                        setTarea={setTarea}
                        id={id}
                        setId={setId}
                        tareas={tareas} 
                        setTareas={setTareas}
                        modoEdicion={modoEdicion} 
                        setModoEdicion={setModoEdicion}
                    />
                </div>
            </div>
		</div>
	);
};

export default App;
