const menu = {
  _meal : 'bread',
  _price : 8,
  _todaySpecials : ['pasta', 'pizza', 'patate', 'pesce'],
  
  get todaySpecial(){
    
    if(this._meal && this._price){
    return `Today’s Special is pesce for 5 euri!`
    } else {
    return 'Meal or price was not set correctly!'
    }
  },
  
  set meal(mealToCheck){
    if (typeof mealToCheck === 'string'){
    this._meal = mealToCheck
    } else {
    this._meal = 'Error' 
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
    this._price = priceToCheck
    }
  }
}
menu._price = 10
menu._meal= 'cacca'
console.log(menu)
console.log(menu.todaySpecial)
