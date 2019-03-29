import { Component, OnInit, Input, OnChanges, Injector, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseClass } from '../../services/common/baseClass';
import Utils from '../../services/common/utils';
import { VALIDATION_TYPES, FORM_TYPES } from '../../constants/validation-patterns';
import { CustomValidators } from '../../services/common/validators';
import { Router } from '@angular/router';
import { GROUPED_INPUT_ENUM } from '../../constants/app-enums';

@Component({
  selector: 'app-reusable-auth-forms',
  templateUrl: './reusable-auth-forms.component.html',
  styleUrls: ['./reusable-auth-forms.component.scss']
})
export class ReusableAuthFormsComponent extends BaseClass implements OnInit, OnChanges {
  @Input()
  private formInfo: any[];

  @Output()
  formInfoEmitter: EventEmitter<any> = new EventEmitter();
  GROUPED_INPUT_ENUM = GROUPED_INPUT_ENUM;
  private validation_messages = {};
  private dynamicForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    public injector: Injector,
    private _router: Router) {
    super(injector);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.createDynamicForm();
  }

  // For Creating Dynamic Forms
  private createDynamicForm() {
    const formControl = {};
    for (let i = 0; i < this.formInfo.length; i++) {
      const field = this.formInfo[i];
      if (this.isTextField(field.type)) {
        if (Utils.isValidInput(field) && Utils.isValidInput(field['validators']) && field['validators'].length > 0) {
          this.validation_messages[field['formControlName']] = [];
          const validatorsArray = this.frameValidations(field);
          formControl[field['formControlName']] = ['', Validators.compose(validatorsArray)];
        }
      }
    }
    this.dynamicForm = this._formBuilder.group(formControl);
  }

  // Frames validation messages and Validators array
  private frameValidations(field) {
    const validatorsArray = [];
    for (let j = 0; j < field['validators'].length; j++) {
      if (field['validatorsTypes'][j] === VALIDATION_TYPES.PATTERN) {
        validatorsArray[j] = Validators.pattern(field['validators'][j]);
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.REQUIRED) {
        validatorsArray[j] = Validators[field['validators'][j]];
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.MAX_LENGTH) {
        validatorsArray[j] = Validators.maxLength(field['validators'][j]);
      } else if (field['validatorsTypes'][j] === VALIDATION_TYPES.MIN_LENGTH) {
        validatorsArray[j] = Validators.minLength(field['validators'][j]);
      } else if (this.checkCustomValidation(field['validatorsTypes'][j])) {
        validatorsArray[j] = CustomValidators[field['validators'][j]];
      }
      const fieldErrors = {
        type: field['validatorsTypes'][j],
        message: field['validatorMessages'][j]
      };
      this.validation_messages[field['formControlName']].push(fieldErrors);
    }
    return validatorsArray;
  }

  private checkCustomValidation(type) {
    if (type === VALIDATION_TYPES.PHONE_NUMBER || type === VALIDATION_TYPES.WHITE_SPACE) {
      return true;
    }
  }
  private isTextField(type) {
    if (type === FORM_TYPES.TEXT || type === FORM_TYPES.PASSWORD || type === FORM_TYPES.EMAIL || type === FORM_TYPES.NUMBER) {
      return true;
    }
  }
  private isButton(type) {
    if (type === FORM_TYPES.BUTTON || type === FORM_TYPES.SUBMIT || type === FORM_TYPES.RESET) {
      return true;
    }
  }
  private isLink(type) {
    if (type === FORM_TYPES.LINK) {
      return true;
    }
  }
  private formSubmit() {
    this.formInfoEmitter.emit(this.dynamicForm.value);
  }
  private isFormValid() {
    return this.dynamicForm.invalid;
  }

  private isGroupedInput(field) {
    if (Utils.isValidInput(field)) {
      return field;
    }
  }

  private navigate(groupedInfo) {
    console.log('hai');
    if (Utils.isValidInput(groupedInfo) && groupedInfo.isLink) {
      this._router.navigateByUrl(groupedInfo);
    }
  }

  private checkGroupedInfoType(input, expected) {
    if (Utils.isValidInput(input) && input === expected) {
      return true;
    }
  }
}
