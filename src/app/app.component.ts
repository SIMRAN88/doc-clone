import { Component} from '@angular/core';
import { tinyMCEConfigCreate, pastePreprocess } from '../app/utils/tinymceConfig';

declare const tinymce;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-google-doc-clone';
  createButton = false;
  editButton = true;
  createEditor = false;
  editEditor = false;
  disableCreateEditor = false;
  init = { ...tinyMCEConfigCreate, ...pastePreprocess };
  editContent = '';
  changeContent = false;
  submitted = false;
  createdContent: any;
  editedContentArray = [];
  disableSubmitButton = false;
  constructor() { }
  createDoc = () => {
    this.createEditor = true;
    this.createButton = true;
  }
  editDoc = () => {
    this.editEditor = true;
    this.editButton = true;
    this.createEditor = false;
  }
  onEditContentChange = () => {
    this.changeContent = true;
    var today = new Date();
    const editedContent = {
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '' +
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      content: tinymce.editors[0].getContent()
    }
    this.editedContentArray.push(editedContent);
  }
  setEditorContent = () => {
    tinymce.editors[0].setContent(this.editContent);
  }
  onEditEditorInit = () => {
    this.setEditorContent();
  }
  submit() {
    this.createdContent = tinymce.editors[0].getContent();
    this.disableCreateEditor = true;
    this.editButton = false;
    this.disableSubmitButton = true;
    this.editContent = this.createdContent;
  }
  setContentBasedOnHistory = (item) => {
    tinymce.editors[0].setContent(item.content);
  }
  accessOriginal = () => {
    tinymce.editors[0].setContent(this.createdContent);
  }
}
