recovery_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(f"{student_grade[0]}\n")


with open("recuStudents.txt", mode="w") as recu_students_file:
    print(recovery_students)
    recu_students_file.writelines(recovery_students)
