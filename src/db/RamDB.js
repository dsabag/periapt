class RamDB {
  #users = {};

  save(user, token) {
    this.#users[token] = user;
  }
  get(token) {
    if (this.#users?.hasOwnProperty?.(token)) {
      return this.#users?.[token];
    }
  }
}

export const DBinstance = new RamDB();
