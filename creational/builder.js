class Home {

	constructor() {
		this.floor = 1;
		this.room = 2;
		this.bathroom = 1;
		this.panoramicWindow = false;
	}

	floors(numberOfFloor) {
		this.floor = numberOfFloor;
		return this;
	}

	rooms(numberOfRooms) {
		this.room = numberOfRooms;
		return this;
	}

	bathrooms(numberOfBathroom) {
		this.bathroom = numberOfBathroom;
		return this;
	}
	
	panoramicWindows(booleanPW) {
		this.panoramicWindow = booleanPW;
		return this;
	}

	build() {
		console.log(this);
		return this;
	}
}

const home = new Home().floors(3).rooms(5).bathrooms(2).panoramicWindows(true).build();