export interface User {
    emailAddress: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    role: string;
    updatedBy: string;
    username: string;
    updatedDate?: UpdatedDate;
}

interface UpdatedDate {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
