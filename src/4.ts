class Key {
  private signature = Math.random()

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

class House {
  tenants: Person[] = [];

  constructor(public door: boolean, public key: Key) {
    this.door = door;
  }
  
  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
      console.log('Welcome!');
    } else {
      console.log('The door is closed.');
    }
  }

  openDoor(key: Key): void {
    this.key = key;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("The door is closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


// export {};