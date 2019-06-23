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
    }
};

