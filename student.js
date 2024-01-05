// Simulated student data (Replace this with actual data retrieved from the backend)
let students = [
     { id: 1, name: "John Doe", grade: "10th" },
     { id: 2, name: "Jane Smith", grade: "11th" },
     // Add more student objects as needed
   ];
   
   // Function to display students in the table
   function displayStudents() {
     const tableBody = document.querySelector("#studentsTable tbody");
     tableBody.innerHTML = '';
   
     students.forEach((student) => {
       const row = tableBody.insertRow();
       row.innerHTML = `
         <td>${student.id}</td>
         <td>${student.name}</td>
         <td>${student.grade}</td>
         <td>
           <button onclick="editStudent(${student.id})">Edit</button>
           <button onclick="deleteStudent(${student.id})">Delete</button>
         </td>
       `;
     });
   }
   
   // Function to show the add student form
   function showAddStudentForm() {
     document.getElementById("addStudentForm").style.display = "block";
   }
   
   // Function to cancel adding a student
   function cancelAddStudent() {
     document.getElementById("addStudentForm").style.display = "none";
   }
   
   // Function to add a new student
   function addStudent(event) {
     event.preventDefault();
     const newName = document.getElementById("studentName").value;
     const newGrade = document.getElementById("studentGrade").value;
   
     const newStudent = {
       id: students.length + 1,
       name: newName,
       grade: newGrade
     };
   
     students.push(newStudent);
     displayStudents();
     cancelAddStudent();
     document.getElementById("studentName").value = '';
     document.getElementById("studentGrade").value = '';
   }
   
   // Function to edit a student (placeholder function)
   function editStudent(studentId) {
     // Implement edit functionality here
     alert(`Editing student with ID ${studentId}`);
   }
   
   // Function to delete a student (placeholder function)
   function deleteStudent(studentId) {
     // Implement delete functionality here
     students = students.filter(student => student.id !== studentId);
     displayStudents();
   }
   
   // Event listener for the "Add Student" button
   document.getElementById("addStudentBtn").addEventListener("click", function() {
     showAddStudentForm();
   });
   
   // Event listener for the "Cancel" button in the add student form
   document.getElementById("cancelAddBtn").addEventListener("click", function(event) {
     event.preventDefault();
     cancelAddStudent();
   });
   
   // Event listener for the "Save" button in the add student form
   document.getElementById("addStudentForm").addEventListener("submit", function(event) {
     addStudent(event);
   });
   
   // Initial display of students when the page loads
   displayStudents();
   