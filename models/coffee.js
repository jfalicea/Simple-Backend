const db = require("./conn");

class Coffee{
    constructor(id, name, orders, size){
        this.id = id; 
        this.name = name; 
        this.orders = orders;
        this.size = size;
    }
    static getByID(id){
        return db.one(`select*from coffee where id=${id}`)
            .then((oneCoffeeData)=>{
                const coffeeInstance = new Coffee(oneCoffeeData.id, oneCoffeeData.name, oneCoffeeData.orders, oneCoffeeData.size);
                return coffeeInstance
            })
            .catch(()=>{
                return null;
            });
    }
    save(){
        return db.result(`
        update coffee set
        name = ${this.name},
        orders = ${this.orders},
        size = ${this.size},
        where id=${this.id}`
        )
    }
}
module.exports = Coffee