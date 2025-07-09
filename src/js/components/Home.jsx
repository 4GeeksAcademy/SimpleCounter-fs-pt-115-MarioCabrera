import React from "react";
import { Contador } from "./Contador";
//create your first component
const Home = ({data}) => {
	const {
		counter,
		cuentaRegresiva,
		alternarDetencion,
		estaDetenido,
		limiteFinal,
		esRegresiva
	} = data;
	const secondsString = counter.toString().padStart(6, "0");
	const contador = secondsString.split("").map(char =>
		char === "-" ? "-" : Number(char)
	);
	return (
		<>
			<div className="container-fluid  bg-dark p-5">
				<div className="row d-flex justify-content-between mb-4">
					<div className="col-1 text-white fs-1 border border-secondary-subtle border-top-0 border-bottom-0 text-center rounded mx-2">
						<i className="fa-solid fa-stopwatch"></i>
					</div>
					{contador.map((item, index) => (
						<Contador
							key={index}
							data={{
								index: index,
								contenido: item
							}}
						/>
					))}
				</div>
				<div className="row d-flex justify-content-between mb-4">
					<button className="btn btn-primary col-3" onClick={cuentaRegresiva}>{esRegresiva ? "Cuenta progresiva": "Cuenta regresiva"}</button>
					<button className={`btn ${estaDetenido ? "btn-success" : "btn-danger"} col-3`} onClick={alternarDetencion}> {estaDetenido ? "Start" : "Stop"}</button>
					<button className="btn btn-info col-3" onClick={limiteFinal}>Determina el final</button>
				</div>
			</div>
		</>
	);
};

export default Home;