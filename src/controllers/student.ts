import StudentDB from "../db/student";

type StudentRecord = [
    studentId: string,
    name: string,
    final_grade: number,
    hasIssues: boolean
];

const studentDB = new StudentDB();

class StudentController {
    async getStudentsStatus() {
        const studentList = await studentDB.db() as StudentRecord[];
        const student_status_list = [];

        for (let student of studentList) {
            if (student[2] >= 90 && !student[3]) {
                student_status_list.push([student[0], "Te graduaste con honores"]);
            }
            else if(student[2] >= 90 && student[3]){
                student_status_list.push([student[0], "Tenias honores pero tienes una deuda"]);
            }
            else if(student[2] > 69 && student[2] <90 && !student[3]){
                student_status_list.push([student[0], "Pasaste muy apenas"]);
            }
            else if(student[2] > 69 && student[2] <90 && student[3]){
                student_status_list.push([student[0], "Pasaste muy apenas pero tienes deuda"]);
            }
            else if(student[2] < 70 && !student[3]){
                student_status_list.push([student[0], "Como no tienes adeudo tienes derecho a un examen de recuperación."]);
            }
            else if(student[2] < 70 && student[3]){
                student_status_list.push([student[0], "Expulsado."]);
            }
        }

        return student_status_list;
    }
}

export default StudentController;