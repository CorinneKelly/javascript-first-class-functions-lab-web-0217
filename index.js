function countdown(callback){
	window.setTimeout(function(){
		callback()
	}, 2000)

}

function multiplierValue(value){
	return function something(number){
		return number * value
	}
}

function createMultiplier(number){
	return multiplierValue(number)
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b){
	return a * b
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
