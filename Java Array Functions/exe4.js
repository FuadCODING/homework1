let classrooms = [
    { name: "Аудитория 101", seats: 15, faculty: "Физический" },
    { name: "Аудитория 102", seats: 20, faculty: "Математический" },
    { name: "Аудитория 103", seats: 10, faculty: "Химический" },
    { name: "Аудитория 104", seats: 18, faculty: "Физический" },
    { name: "Аудитория 105", seats: 12, faculty: "Математический" },
    { name: "Аудитория 106", seats: 16, faculty: "Физический" }
];
function displayAllClassrooms(classrooms) {
    console.log("Все аудитории:");
    classrooms.forEach(classroom => {
        console.log(`${classroom.name} - ${classroom.seats} мест, факультет: ${classroom.faculty}`);
    });
}
function displayClassroomsByFaculty(classrooms, facultyName) {
    console.log(`Аудитории для факультета ${facultyName}:`);
    classrooms
        .filter(classroom => classroom.faculty === facultyName)
        .forEach(classroom => {
            console.log(`${classroom.name} - ${classroom.seats} мест`);
        });
}
function displayClassroomsForGroup(classrooms, group) {
    console.log(`Аудитории, подходящие для группы ${group.name}:`);
    classrooms
        .filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty)
        .forEach(classroom => {
            console.log(`${classroom.name} - ${classroom.seats} мест`);
        });
}

let group = { name: "Группа A", students: 16, faculty: "Физический" };
function sortClassroomsBySeats(classrooms) {
    classrooms.sort((a, b) => a.seats - b.seats);
    console.log("Аудитории, отсортированные по количеству мест:");
    displayAllClassrooms(classrooms);
}
function sortClassroomsByName(classrooms) {
    classrooms.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Аудитории, отсортированные по названию:");
    displayAllClassrooms(classrooms);
}

displayAllClassrooms(classrooms);


displayClassroomsByFaculty(classrooms, "Физический");


displayClassroomsForGroup(classrooms, group);


sortClassroomsBySeats(classrooms);


sortClassroomsByName(classrooms);
