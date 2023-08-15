class Church {
  constructor(name, street, city, state, zip) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  getChurchInformation() {
    return `${this.name} - ${this.street} - ${this.city} - ${this.state} - ${this.zip}`;
  }
}

module.exports = {
  Church,
};
