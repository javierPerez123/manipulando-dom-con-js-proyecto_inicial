
const nameCourse = (text) => {
    const course = document.createElement('span');
    course.classList.add('task');
    course.textContent = text
    return course;
}

export default nameCourse;