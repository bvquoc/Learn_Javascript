function countStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  return studentList.reduce((sum, student) => sum + (student.gender === 'male'), 0);
}
