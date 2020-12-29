class EngineV4 {
	simpleInterface() { 
		console.log('Tr-tr-tr-tr');
	}
}

class EngineV12 {
	complecatedInterface() { 
		console.log('Wroom wroom!');
	}
}

class EngineAdapter {
	constructor(engine) {
		this.engine = engine;
	}
     
	simpleInterface() {
		this.engine.complecatedInterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface();
	}
}

const myCar = new Auto();
const engineAdapter = new EngineAdapter(new EngineV12());

myCar.startEngine(engineAdapter);