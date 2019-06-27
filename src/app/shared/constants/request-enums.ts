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
    }
};

