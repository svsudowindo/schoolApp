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
    }
};

