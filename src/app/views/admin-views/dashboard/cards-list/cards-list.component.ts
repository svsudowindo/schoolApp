import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from '../../../../shared/services/common-request.service';
import { RequestEnums } from '../../../../shared/constants/request-enums';
import Utils from '../../../../shared/services/common/utils';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../../../shared/services/common/globalVariables';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  subjects = [
    {
        "courseID": 1,
        "courseName": "MECH",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": [
            {
                "yearID": 4,
                "yearName": "FOURTH_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:47.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:47.000+0000",
                "subject": [
                    {
                        "subjectID": 31,
                        "subjectName": "subject31",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 32,
                        "subjectName": "subject32",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 27,
                        "subjectName": "subject27",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 28,
                        "subjectName": "subject28",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 30,
                        "subjectName": "subject30",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 25,
                        "subjectName": "subject25",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 26,
                        "subjectName": "subject26",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 29,
                        "subjectName": "subject29",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 2,
                "yearName": "SECOND_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:25.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:25.000+0000",
                "subject": [
                    {
                        "subjectID": 14,
                        "subjectName": "subject14",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 9,
                        "subjectName": "subject9",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 13,
                        "subjectName": "subject13",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 11,
                        "subjectName": "subject11",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 10,
                        "subjectName": "subject10",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 16,
                        "subjectName": "subject16",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 12,
                        "subjectName": "subject12",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 15,
                        "subjectName": "subject15",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 1,
                "yearName": "FIRST_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:14.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:14.000+0000",
                "subject": [
                    {
                        "subjectID": 2,
                        "subjectName": "subject2",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 4,
                        "subjectName": "subject4",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 3,
                        "subjectName": "subject3",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 7,
                        "subjectName": "subject7",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 1,
                        "subjectName": "subjec1",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-03T16:28:44.000+0000"
                    },
                    {
                        "subjectID": 5,
                        "subjectName": "subject5",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 6,
                        "subjectName": "subject6",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 8,
                        "subjectName": "subject8",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 3,
                "yearName": "THIRD_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:37.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:37.000+0000",
                "subject": [
                    {
                        "subjectID": 24,
                        "subjectName": "subject24",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 21,
                        "subjectName": "subject21",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 19,
                        "subjectName": "subject19",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 20,
                        "subjectName": "subject20",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 23,
                        "subjectName": "subject23",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 22,
                        "subjectName": "subject22",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 18,
                        "subjectName": "subject18",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 17,
                        "subjectName": "subject17",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            }
        ]
    },
    {
        "courseID": 2,
        "courseName": "EEE",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": [
            {
                "yearID": 4,
                "yearName": "FOURTH_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:47.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:47.000+0000",
                "subject": [
                    {
                        "subjectID": 31,
                        "subjectName": "subject31",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 32,
                        "subjectName": "subject32",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 27,
                        "subjectName": "subject27",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 28,
                        "subjectName": "subject28",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 30,
                        "subjectName": "subject30",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 25,
                        "subjectName": "subject25",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 26,
                        "subjectName": "subject26",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 29,
                        "subjectName": "subject29",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 2,
                "yearName": "SECOND_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:25.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:25.000+0000",
                "subject": [
                    {
                        "subjectID": 14,
                        "subjectName": "subject14",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 9,
                        "subjectName": "subject9",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 13,
                        "subjectName": "subject13",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 11,
                        "subjectName": "subject11",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 10,
                        "subjectName": "subject10",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 16,
                        "subjectName": "subject16",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 12,
                        "subjectName": "subject12",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 15,
                        "subjectName": "subject15",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 1,
                "yearName": "FIRST_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:14.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:14.000+0000",
                "subject": [
                    {
                        "subjectID": 2,
                        "subjectName": "subject2",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 4,
                        "subjectName": "subject4",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 3,
                        "subjectName": "subject3",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 7,
                        "subjectName": "subject7",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 1,
                        "subjectName": "subjec1",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-03T16:28:44.000+0000"
                    },
                    {
                        "subjectID": 5,
                        "subjectName": "subject5",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 6,
                        "subjectName": "subject6",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 8,
                        "subjectName": "subject8",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 3,
                "yearName": "THIRD_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:37.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:37.000+0000",
                "subject": [
                    {
                        "subjectID": 24,
                        "subjectName": "subject24",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 21,
                        "subjectName": "subject21",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 19,
                        "subjectName": "subject19",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 20,
                        "subjectName": "subject20",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 23,
                        "subjectName": "subject23",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 22,
                        "subjectName": "subject22",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 18,
                        "subjectName": "subject18",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 17,
                        "subjectName": "subject17",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            }
        ]
    },
    {
        "courseID": 3,
        "courseName": "BME",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": [
            {
                "yearID": 4,
                "yearName": "FOURTH_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:47.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:47.000+0000",
                "subject": [
                    {
                        "subjectID": 31,
                        "subjectName": "subject31",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 32,
                        "subjectName": "subject32",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 27,
                        "subjectName": "subject27",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 28,
                        "subjectName": "subject28",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 30,
                        "subjectName": "subject30",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 25,
                        "subjectName": "subject25",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 26,
                        "subjectName": "subject26",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 29,
                        "subjectName": "subject29",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 2,
                "yearName": "SECOND_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:25.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:25.000+0000",
                "subject": [
                    {
                        "subjectID": 14,
                        "subjectName": "subject14",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 9,
                        "subjectName": "subject9",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 13,
                        "subjectName": "subject13",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 11,
                        "subjectName": "subject11",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 10,
                        "subjectName": "subject10",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 16,
                        "subjectName": "subject16",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 12,
                        "subjectName": "subject12",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 15,
                        "subjectName": "subject15",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 1,
                "yearName": "FIRST_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:14.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:14.000+0000",
                "subject": [
                    {
                        "subjectID": 2,
                        "subjectName": "subject2",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 4,
                        "subjectName": "subject4",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 3,
                        "subjectName": "subject3",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 7,
                        "subjectName": "subject7",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 1,
                        "subjectName": "subjec1",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-03T16:28:44.000+0000"
                    },
                    {
                        "subjectID": 5,
                        "subjectName": "subject5",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 6,
                        "subjectName": "subject6",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 8,
                        "subjectName": "subject8",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            },
            {
                "yearID": 3,
                "yearName": "THIRD_YEAR",
                "createdBy": "NA",
                "createdDate": "2019-04-04T06:04:37.000+0000",
                "updatedBy": "NA",
                "updatedDate": "2019-04-04T06:04:37.000+0000",
                "subject": [
                    {
                        "subjectID": 24,
                        "subjectName": "subject24",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 21,
                        "subjectName": "subject21",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 19,
                        "subjectName": "subject19",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 20,
                        "subjectName": "subject20",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 23,
                        "subjectName": "subject23",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 22,
                        "subjectName": "subject22",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 18,
                        "subjectName": "subject18",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    },
                    {
                        "subjectID": 17,
                        "subjectName": "subject17",
                        "createdBy": "NA",
                        "createdDate": "2019-04-02T06:23:52.000+0000",
                        "updatedBy": "NA",
                        "updatedDate": "2019-04-02T06:23:52.000+0000"
                    }
                ]
            }
        ]
    },
    {
        "courseID": 4,
        "courseName": "CIVIL",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": []
    },
    {
        "courseID": 5,
        "courseName": "ARCH",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": []
    },
    {
        "courseID": 6,
        "courseName": "CSC",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": []
    },
    {
        "courseID": 7,
        "courseName": "SOFT",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": []
    },
    {
        "courseID": 8,
        "courseName": "ECE",
        "createdBy": "NA",
        "createdDate": "2019-04-02T06:23:22.000+0000",
        "updatedBy": "NA",
        "updatedDate": "2019-04-02T06:23:23.000+0000",
        "year": []
    }
];

  constructor(private _commonRequestServ: CommonRequestService,
    private _router: Router,public _globalVariable: GlobalVariables) { }

  ngOnInit() {
    this.getCardsInfo();
  }

  getCardsInfo() {
    this._commonRequestServ.request(RequestEnums.GET_COURSES_LIST).subscribe(res => {
       
      this.subjects = res;
      Utils.log(JSON.stringify(this.subjects));
    });
  }

  navigateToCourseDetails(courseDetails) {
    this._globalVariable.setParameterData('course',courseDetails);
    this._router.navigate(['course-details']);
  }

}
