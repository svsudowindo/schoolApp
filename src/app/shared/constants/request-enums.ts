export const RequestEnums = {
    LOGIN: {
        type: 'GET',
        path: '/questionbank/login',
        keys: [],
        values: []
    },
    CARDS_LIST: {
        type: 'GET',
        path: '/assets/modals/cards-list.json',
        keys: ['id'],
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
        path: '/api/v1/courses',
        keys: [],
        values: []
    }
};

