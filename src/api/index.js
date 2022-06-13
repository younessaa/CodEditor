import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5002' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



export const studentSignIn = (formData) => API.post('/students/signin', formData);
export const studentSignUp = (formData) => API.post('/students/signup', formData);

export const compile = (formData) => API.post('/compile', formData);

export const fetchStudents = () => API.get('/students');
export const fetchStudent = (id) => API.get(`/students/${id}`);
export const createStudent = (student) => API.post('/students', student);
export const updateStudent = (id, updatedStudent) => API.patch(`/students/${id}`, updatedStudent);
export const deleteStudent = (id) => API.delete(`/students/${id}`);

export const tutorSignIn = (formData) => API.post('/tutors/signin', formData);
export const tutorSignUp = (formData) => API.post('/tutors/signup', formData);

export const fetchTutors = () => API.get('/tutors');
export const fetchTutor = (id) => API.get(`/tutors/${id}`);
export const createTutor = (tutor) => API.post('/tutors', tutor);
export const updateTutor = (id, updatedTutor) => API.patch(`/tutors/${id}`, updatedTutor);
export const deleteTutor = (id) => API.delete(`/tutors/${id}`);


export const fetchCourses = () => API.get('/courses');
export const fetchCourse = (id) => API.get(`/courses/${id}`);
export const createCourse = (Course) => API.post('/courses', Course);
export const updateCourse = (id, updatedCourse) => API.patch(`/courses/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);

export const fetchLabs = () => API.get('/labs');
export const fetchLab = (id) => API.get(`/labs/${id}`);
export const createLab = (Course) => API.post('/labs', Course);
export const updateLab = (id, updatedCourse) => API.patch(`/labs/${id}`, updatedCourse);
export const deleteLab = (id) => API.delete(`/labs/${id}`);
