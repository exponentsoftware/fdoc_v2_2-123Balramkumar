const students = [
    {
      name: 'Alice',
      age: 19,
      grades: [85, 90, 92],
      hobbies: ['reading', 'gaming'],
    },
    {
      name: 'Bob',
      age: 20,
      grades: [75, 80, 85],
      hobbies: ['music', 'sports'],
    },
    {
      name: 'Charlie',
      age: 18,
      grades: [95, 90, 97],
      hobbies: ['photography', 'travelling'],
    },
    {
      name: 'David',
      age: 19,
      grades: [80, 85, 88],
      hobbies: ['movies', 'video games'],
    },
  ];
  
  function findTopStudents(students, threshold) {
    return students.filter(
      student => student.grades.reduce((a, b) => a + b, 0) / student.grades.length >= threshold
    );
  }
  
  function addHobby(students, name, hobby) {
    const student = students.find(student => student.name === name);
    if (student) {
      student.hobbies.push(hobby);
    }
  }
  
  function updateStudent(students, name, updates) {
    const studentIndex = students.findIndex(student => student.name === name);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updates };
    }
  }
  
  console.log('All students:', students);
  
  console.log('Top students (threshold 85):', findTopStudents(students, 85));
  
  addHobby(students, 'Alice', 'painting');
  console.log("Alice's hobbies:", students.find(student => student.name === 'Alice').hobbies);
  
  updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] });
  console.log('Updated Alice:', students.find(student => student.name === 'Alice'));
  