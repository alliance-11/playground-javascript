const teachers = [
  { name: "Robert", experience: 5 },
  { name: "Gael", experience: 50 },
  { name: "Edward", experience: 95 },
]
console.log(teachers);

const searchTeacherByExperience=(minimumExperience)=>{
  let teachersFilter=teachers.filter((teacher) => {
    return teacher.experience >= minimumExperience;
  })
  console.log(teachersFilter);
  // kein return!
}
let result = searchTeacherByExperience(6)
console.log("Result:", result)

searchTeacherByExperience(50)
searchTeacherByExperience(90)