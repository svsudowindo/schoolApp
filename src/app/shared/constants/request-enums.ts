export const RequestEnums = {
    LOGIN: {
        type: 'GET',
        path: '/questionbank/login',
        keys: [],
        values: []
    },
    SUBJECTS_LIST: {
        type: 'GET',
        path: '/assets/modals/subjects.json',
        keys: ['id'],
        values: []
    },
    GET_COURSES_LIST: {
        type: 'GET',
        path: '/questionbank/auth/courses',
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
        path: '/questionbank/auth/years/courseid/:id',
        keys: ['id'],
        values: []
    },
    ADD_SUBJECTS: {
        type: 'POST',
        path: '/questionbank/auth/addsubjects',
        keys: [],
        values: []
    },
    GET_SUBJECTS_BY_YEAR: {
        type: 'GET',
        path: '/questionbank/auth/subjects/yearid/:id',
        keys: ['id'],
        values: []
    }
};

