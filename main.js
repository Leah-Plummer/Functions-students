let studentName = "Chad"
let studentGrade = 3

const createStudent = (studentName, studentGrade) => {
    const newstudentObject = {
        name: studentName,
        grade: studentGrade
    }

    return newstudentObject
}

let studentObject = createStudent(studentName, studentGrade)

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    
    return studentObject
}

studentObject = addMathGrade(studentObject)

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    
    return studentObject
}

studentObject = addHistoryGrade(studentObject)

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"

    return studentObject
}

studentObject = addScienceGrade(studentObject)
console.log(studentObject)