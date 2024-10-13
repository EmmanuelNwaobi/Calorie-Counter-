let form = document.getElementById("form")
let walkingTime = document.getElementById("walking")
let runningTime = document.getElementById("running")
let cyclingTime = document.getElementById("cycling")
let calorieBtn = document.getElementById("calorie-btn")
let calorieContainer = document.getElementById("number-of-calories")


//Activate the submit button when all input flied lsi filled 
walkingTime.addEventListener("keyup", checkInputs)
runningTime.addEventListener("keyup", checkInputs)
cyclingTime.addEventListener("keyup", checkInputs)


function checkInputs(){
    let walk = walkingTime.value
    let run = runningTime.value
    let cycle = cyclingTime.value
    if(walk.length >0 && run.length >0 && cycle.length >0){
        calorieBtn.style.backgroundColor = "var(--btnActive)"
    } else {
        calorieBtn.style.backgroundColor = "var(--btnBG)"
    }
}

//Collect Input Data from user's 
form.addEventListener("submit", collectMinute)
function collectMinute(event){
    event.preventDefault()

    let walking = walkingTime.value 
    let running = runningTime.value
    let cycling = cyclingTime.value 

    if(walking.length === 0 && running.length === 0 && cycling.length === 0){
        alert("All field must be completed!")
        return
    }else {
        const userInput = {
            walkingCal : walking,
            runningCal : running,
            cyclingCal : cycling
        }
        totalBurnedCalories(userInput.walkingCal, userInput.runningCal, userInput.cyclingCal)
    }
    form.reset()
}

const totalBurnedCalories = (walkingTime, runningTime, cyclingTime)=>{
    //stated facts 
    const calorieBurnedPerMinute = {
        walking : 5,
        running : 10,
        cycling : 8
    }

    let walkingCalorieBurned = calorieBurnedPerMinute.walking * walkingTime
    let runningCalorieBurned = calorieBurnedPerMinute.running *runningTime
    let cyclingCalorieBurned = calorieBurnedPerMinute.cycling *cyclingTime

    let totalCaloriesBurned = walkingCalorieBurned + runningCalorieBurned + cyclingCalorieBurned

    let calorieResult = `
     <h1>${totalCaloriesBurned}</h1>
                <p>Calories</p>`

    calorieContainer.innerHTML = calorieResult

    return totalCaloriesBurned
}