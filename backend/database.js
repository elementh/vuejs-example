class Database {
  constructor() {
    this.games = [
      {
        id: 1,
        title: 'Bayonetta 2',
        price: 54.90
      },
      {
        id: 2,
        title: 'Mario Kart 8 Deluxe',
        price: 49.90
      },
      {
        id: 3,
        title: 'Splatoon 2',
        price: 54.95
      },
      {
        id: 4,
        title: 'Xenoblad Chronicles 2',
        price: 57.94
      },
      {
        id: 5,
        title: 'The Elder Scrolls V: Skyrim',
        price: 49.90
      }
    ]
  }

  async add(title, price = 60.00) {
    price = Number(price)
    let id = this.games.length
    this.games.push({
      id,      
      title,
      price
    })
  }

  async delete(id) {
    let index = id - 1
    this.games.splice(index, 1)
  }
}
module.exports = Database