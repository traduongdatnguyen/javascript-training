
var students = [
    {
        id: 1,
        name: 'nguyen',
        msv: 1243
    },
    {
        id: 2,
        name: 'nha',
        msv: 1223
    },
    {
        id: 3,
        name: 'hai',
        msv: 1273
    },
    {
        id: 4,
        name: 'mai',
        msv: 1293
    },
];


// phương thức map được dùng để chỉnh sửa thanh đổi element trong array
// khi dùng map thì phải dùng 1 đối số
//  khi truyền function thì map() lặp các element trong array
var newStudents = students.map(newStudent);
var newStudent = (student, index) => {
    return {
        id : 1 + student.id,
        name: `VKU: ${student.name}`,
        msv: student.msv
    }
}
console.log(newStudents);