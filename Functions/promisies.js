function getStudent(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const student = { name: 'John', age: 20, id: id };
        resolve(student);
        reject(new Error('Error fetching student data'));
        }, 2000);
    });
}

function getCourses(studentId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const courses = [
                { id: 1, name: 'Math', studentId: studentId },
                { id: 2, name: 'Science', studentId: studentId }
            ];
            resolve(courses);
            reject(new Error('Error fetching courses data'));
        }, 2000);
    });
}
function getCourseDetails(courseId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const courseDetails = { id: courseId, description: 'Detailed description of the course' };
            resolve(courseDetails);
            reject(new Error('Error fetching course details'));
        }, 2000);
    });
}

getStudent(1)
.then(student => {console.log('Student:', student);
    return getCourses(student.id);})
.then(courses => {
    console.log('Courses:', courses);
    return getCourseDetails(courses[0].id);
})
.then(courseDetails => {
    console.log('Course Details:', courseDetails);
})
.catch(error => {
    console.error('Error:', error.message);
});