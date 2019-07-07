import { Router } from '@angular/router';
import Utils from 'src/app/shared/services/common/utils';
import { CLICK_STATUS, POPUP, DIALOG_TYPE } from './../../../../shared/constants/popup-enum';
import { Component, OnInit, Input } from '@angular/core';
import { CourseDetailsService } from '../course-details.service';
import { PopupService } from 'src/app/shared/components/componentsAsService/popup/popup.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input()
  subjects: any;
  constructor(private _courseDetailsService: CourseDetailsService,
    private _popupService: PopupService,
    private _router: Router) { }

  ngOnInit() {
  }

  navigateToCourseDetails() {

  }

  deleteSubject(subject) {
    RequestEnums.DELETE_SUBJECT.values.push(subject.subjectID);
    this._popupService.openModal({
      dialog_type: DIALOG_TYPE.CONFIMATION_DIALOG,
      type: POPUP.ERROR,
      title: 'Delete Subject',
      message: 'Please confirm to delete the subject',
      okButtonLabel: 'Delete',
      cancelButtonLabel: 'Cancel'
    }).then(res => {
      if (res === CLICK_STATUS.SUBMIT_BUTTON) {
        console.log("inside if");
        this._courseDetailsService.deleteSubject(RequestEnums.DELETE_SUBJECT).subscribe((data) => {
          Utils.log('subject deleted successfully');
          RequestEnums.DELETE_SUBJECT.values = [];
        }, (error) => {
          Utils.log('subject delete unsuccessfully' + JSON.stringify(error));
        });
      }
    });
  }

  editSubject(subject) {
    this._router.navigate(['add-subjects', 'edit', subject.yearID]);
  }

}
