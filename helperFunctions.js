function getRandomDate(startYear=2020, endYear=2024){
    const yearRange = endYear - startYear + 1
    const randomYear = startYear + Math.floor(Math.random() * yearRange)
    const isLeapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (randomYear % 400 === 0)
    
    const randomMonth = 1 + Math.floor(Math.random() * 12)
    const months31days = [1,3,5,7,8,10,12]
    const months30days = [4,6,9,11]
    const februaryDays = isLeapYear ? 29 : 28

    let randomDay;

    if (months30days.includes(randomMonth)){
        randomDay = 1 + Math.floor(Math.random() * 30)
    } else if (months31days.includes(randomMonth)){
        randomDay = 1 + Math.floor(Math.random() * 31)
    } else {
        randomDay = 1 + Math.floor(Math.random() * februaryDays)
    }
    
    return new Date(`${randomYear}-${randomMonth}-${randomDay}`)

}

function generateRandomDates(numberOfDates){
    const randomDates = []
    for (let i = 0; i < numberOfDates; i++){
        randomDates.push(getRandomDate())
    }
    return randomDates
}



export {getRandomDate, generateRandomDates}