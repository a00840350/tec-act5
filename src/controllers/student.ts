class StudentController {
    async getStudentsStatus() {
        const studentList = await getStudentsListfromDB();
    }
}

export default StudentController;