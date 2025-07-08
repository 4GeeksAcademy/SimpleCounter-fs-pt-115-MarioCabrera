import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Contador } from "./Contador";
import { variables } from "./variables";
const contadores = variables[0].contadores
//create your first component
const Home = () => {

	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds(prev => prev + 1);
		}, 1000); // Actualiza cada 2 segundos

		return () => clearInterval(intervalId);
	}, []);
	const secondsString = seconds.toString().padStart(6, "0"); // Ejemplo: 000005
	const contador = secondsString.split("").map(Number);
	return (
		<>
			<div className="container-fluid  bg-dark p-5">
				<div className="row d-flex justify-content-between">
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
			</div>
		</>
	);
};

export default Home;