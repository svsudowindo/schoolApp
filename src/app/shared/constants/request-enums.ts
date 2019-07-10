export const RequestEnums = {
    LOGIN: {
        type: 'GET',
        path: '/questionbank/login',
        keys: [],
        values: []
    },
    GET_COURSES_LIST: {
        type: 'GET',
        path: '/questionbank/auth/getAllCourses',
        keys: [],
        values: []
    },
    ADD_COURSE: {
        type: 'POST',
        path: '/questionbank/auth/addcourses',
        keys: [],
        values: []
    },
    GET_YEAR_BY_COURSEID: {
        type: 'GET',
        path: '/questionbank/auth/getYearsByCourseId/:id',
        keys: ['id'],
        values: []
    },
    ADD_SUBJECTS: {
        type: 'POST',
        path: '/questionbank/auth/addSubjectForYears',
        keys: [],
        values: []
    },
    GET_SUBJECTS_BY_YEAR: {
        type: 'GET',
        path: '/questionbank/auth/getSubjectsByYearId/:id',
        keys: ['id'],
        values: []
    },
    REGISTER_USER: {
        type: 'POST',
        path: '/questionbank/registerUser',
        keys: [],
        values: []
    },
    GET_ALL_USER: {
        type: 'GET',
        path: '/questionbank/auth/getAllUsers',
        keys: [],
        values: []
    },
    GET_USER_BY_ID: {
        type: 'GET',
        path: '/questionbank/auth/getUserById/:id',
        keys: ['id'],
        values: []
    },
    FORGET_PASSWORD: {
        type: 'GET',
        path: '/questionbank/forgotPassword/:id',
        keys: ['id'],
        values: []
    },
    UPDATE_USER: {
        type: 'PUT',
        path: '/questionbank/auth/updateUser/:id',
        keys: ['id'],
        values: []
    },
    GET_COURSE_BY_ID: {
        type: 'GET',
        path: '/questionbank/auth/getCourseById/:id',
        keys: ['id'],
        values: []
    },
    DELETE_COURSE: {
        type: 'DELETE',
        path: '/questionbank/auth/deleteCourse/:id',
        keys: ['id'],
        values: []
    },
    DELETE_SUBJECT: {
        type: 'DELETE',
        path: '/questionbank/auth/deleteSubject/:id',
        keys: ['id'],
        values: []
    },
    UPDATE_SUBJECT: {
        type: 'PUT',
        path: '/questionbank/auth/updateSubject/:id',
        keys: ['id'],
        values: []
    },
    UPDATE_COURSE: {
        type: 'PUT',
        path: '/questionbank/auth/updateCourse/:id',
        keys: ['id'],
        values: []
    }
};

