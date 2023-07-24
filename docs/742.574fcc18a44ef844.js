"use strict";(self.webpackChunkangular_material_components=self.webpackChunkangular_material_components||[]).push([[742],{5742:(X,M,l)=>{l.r(M),l.d(M,{DemoFileInputModule:()=>d});var c=l(6895),r=l(4006),I=l(9602),h=l(7392),Z=l(4859),T=l(3546),q=l(6709),v=l(4144),C=l(1948),A=l(4385),U=l(6630),O=l(8842),_=l(1281),e=l(4650),b=l(3238),s=l(9549),F=l(5529),P=l(3353);const N=["inputFile"],D=["inputValue"];function J(i,t){1&i&&(e.TgZ(0,"mat-icon",7),e._uU(1,"attach_file"),e.qZA())}const Q=[[["","ngxMatFileInputIcon",""]]];let w=0;const z=(0,b.FD)(class{constructor(i,t,n,o){this._defaultErrorStateMatcher=i,this._parentForm=t,this._parentFormGroup=n,this.ngControl=o,this.stateChanges=new F.xQ}});class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275dir=e.lG2({type:u,selectors:[["","ngxMatFileInputIcon",""]]});class p extends z{constructor(t,n,o,a,f,x,$){super($,f,x,a),this._elementRef=t,this._platform=n,this._cd=o,this.ngControl=a,this.color="primary",this.fileNames=null,this._uid="ngx-mat-fileinput-"+w++,this.stateChanges=new F.xQ,this.focused=!1,this.controlType="ngx-mat-file-input",this.autofilled=!1,this._onTouched=()=>{},this._onChange=()=>{},this._disabled=!1,this._multiple=!1,this.placeholder="Choose a file",this.separator=",",this._required=!1,this._readonly=!0,this.id=this.id,this.ngControl&&(this.ngControl.valueAccessor=this)}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=(0,_.Ig)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get multiple(){return this._multiple}set multiple(t){this._multiple=(0,_.Ig)(t)}get required(){return this._required}set required(t){this._required=(0,_.Ig)(t)}get value(){return this._value}set value(t){this._value=t}get readonly(){return this._readonly}set readonly(t){this._readonly=(0,_.Ig)(t)}get accept(){return this._accept}set accept(t){this._accept=t}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}ngDoCheck(){this.ngControl&&this.updateErrorState()}writeValue(t){this._updateInputValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this.stateChanges.next()}focus(t){this._inputValueRef.nativeElement.focus(t)}_focusChanged(t){t!==this.focused&&(!this.readonly||!t)&&(this.focused=t,this.stateChanges.next())}_markAsTouched(){this._onTouched(),this._cd.markForCheck(),this.stateChanges.next()}_isBadInput(){let t=this._inputValueRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._inputValueRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){return this.focused||!this.empty}setDescribedByIds(t){this._ariaDescribedby=t.join(" ")}openFilePicker(t){this._inputFileRef.nativeElement.click(),t&&(t.preventDefault(),t.stopPropagation()),this._markAsTouched()}handleFiles(t){if(t.length>0){const n=new Array;for(let o=0;o<t.length;o++)n.push(t.item(o));this._updateInputValue(n),this._resetInputFile(),this._onChange(this.multiple?n:n[0])}}onContainerClick(t){}_resetInputFile(){this._inputFileRef.nativeElement.value=""}_updateInputValue(t){let n=null;t&&(n=Array.isArray(t)?this._multiple?t.map(o=>o.name).join(this.separator):t[0].name:null!=t.name?t.name:null),this._inputValueRef.nativeElement.value=n}}p.\u0275fac=function(t){return new(t||p)(e.Y36(e.SBq),e.Y36(P.t4),e.Y36(e.sBO),e.Y36(r.a5,10),e.Y36(r.F,8),e.Y36(r.sg,8),e.Y36(b.rD))},p.\u0275cmp=e.Xpm({type:p,selectors:[["ngx-mat-file-input"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,u,5),2&t){let a;e.iGM(a=e.CRH())&&(n._customIcon=a.first)}},viewQuery:function(t,n){if(1&t&&(e.Gf(N,7),e.Gf(D,7)),2&t){let o;e.iGM(o=e.CRH())&&(n._inputFileRef=o.first),e.iGM(o=e.CRH())&&(n._inputValueRef=o.first)}},hostAttrs:[1,"ngx-mat-file-input"],inputs:{color:"color",disabled:"disabled",id:"id",multiple:"multiple",placeholder:"placeholder",separator:"separator",required:"required",errorStateMatcher:"errorStateMatcher",value:"value",readonly:"readonly",accept:"accept"},exportAs:["ngx-mat-file-input"],features:[e._Bn([{provide:s.Eo,useExisting:(0,e.Gpc)(()=>p)}]),e.qOj,e.TTD],ngContentSelectors:["[ngxMatFileInputIcon]"],decls:8,vars:13,consts:[["autocomplete","off",1,"mat-input-element","mat-form-field-autofill-control",3,"disabled","required"],["inputValue",""],[1,"mat-form-field-suffix"],["matSuffix","","mat-icon-button","","type","button",1,"button-browse",3,"color","disabled","click"],["class","ngx-mat-file-input--default-icon",4,"ngIf"],["type","file",1,"input-file",3,"multiple","accept","change"],["inputFile",""],[1,"ngx-mat-file-input--default-icon"]],template:function(t,n){1&t&&(e.F$t(Q),e._UZ(0,"input",0,1),e.TgZ(2,"div",2)(3,"button",3),e.NdJ("click",function(a){return n.openFilePicker(a)}),e.YNc(4,J,2,0,"mat-icon",4),e.Hsn(5),e.qZA()(),e.TgZ(6,"input",5,6),e.NdJ("change",function(a){return n.handleFiles(a.target.files)}),e.qZA()),2&t&&(e.Q6J("disabled",n.disabled)("required",n.required),e.uIk("id",n.id)("placeholder",n.placeholder)("readonly",n.readonly||null)("aria-describedby",n._ariaDescribedby||null)("aria-invalid",n.errorState)("aria-required",n.required.toString()),e.xp6(3),e.Q6J("color",n.color)("disabled",n.disabled),e.xp6(1),e.Q6J("ngIf",!n._customIcon),e.xp6(2),e.Q6J("multiple",n.multiple)("accept",n.accept))},dependencies:[c.O5,Z.RK,h.Hw,s.R9],styles:[".mat-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}\n"],encapsulation:2});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[c.ez,Z.ot,h.Ps,s.lN,v.c]});var R=l(3288),Y=l(3425),y=l(3848);function E(i,t){if(1&i&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.xp6(1),e.Oqu(null==n?null:n.name)}}function V(i,t){if(1&i&&(e.TgZ(0,"mat-radio-button",26),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.label,"")}}function H(i,t){if(1&i&&(e.TgZ(0,"mat-radio-button",26),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.label,"")}}function k(i,t){if(1&i&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function G(i,t){if(1&i&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&i){const n=t.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}new File([],"file 1"),new File([],"file 2"),new File([],"file 1");class g{constructor(){var i;this.color="primary",this.disabled=!1,this.multiple=!1,this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.listAccepts=[null,".png","image/*",".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"],this.code3='<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    \x3c!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> --\x3e\n  </ngx-mat-file-input>\n</mat-form-field>',this.code4='<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>',this.code5='<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>',this.code1="npm install --save @angular-material-components/file-input",this.code2="import { NgxMatFileInputModule } from '@angular-material-components/file-input';\n  \n  @NgModule({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputModule\n     ]\n     ...\n  })\n  export class AppModule { }",this.code6='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.maxSize=16,this.nbFiles=0,this.fileControl=new r.NI(this.files,[r.kI.required,(i=1024*this.maxSize,t=>{if(i=Number(i),isNaN(i))throw"MaxSizeValidator: max of size of file is invalid";if(!t.value)return null;let n=t.value;return Array.isArray(t.value)||(n=[t.value]),n.length&&n.map(f=>f.size).reduce((f,x)=>f+x)>i?{maxSize:!0}:null})]),this.file2Control=new r.NI(this.files),this.file3Control=new r.NI(this.files)}ngOnInit(){this.fileControl.valueChanges.subscribe(t=>{this.files=Array.isArray(t)?t:[t]}),this.file3Control.valueChanges.subscribe(t=>{let n;n=Array.isArray(t)?t:[t],this.nbFiles=n.length})}onDisabledChanged(t){t?this.fileControl.disable():this.fileControl.enable()}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-demo-fileinput"]],decls:148,vars:26,consts:[["label","API"],["href","https://www.npmjs.com/package/@angular-material-components/file-input","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-picker"],[3,"formControl","multiple","accept","color"],[1,"zone","zone-value","flex-column"],[1,"title"],[1,"value"],[4,"ngFor","ngForOf"],[1,"zone","zone-errors","flex-column"],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["ngxMatHighlight","",1,"language-html"],[3,"formControl"],["ngxMatFileInputIcon",""],["appearance","outline"],[1,"example-radio-button",3,"value"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-tab-group")(1,"mat-tab",0)(2,"h1"),e._uU(3,"API reference for @angular-material-components/file-input"),e.qZA(),e.TgZ(4,"h2"),e._uU(5,"Getting started"),e.qZA(),e.TgZ(6,"a",1),e._UZ(7,"img",2),e.qZA(),e.TgZ(8,"pre")(9,"code"),e._uU(10),e.qZA()(),e.TgZ(11,"h2"),e._uU(12,"Setup"),e.qZA(),e.TgZ(13,"pre")(14,"code",3),e._uU(15),e.qZA()(),e.TgZ(16,"h2"),e._uU(17,"Properties @Input"),e.qZA(),e.TgZ(18,"table",4)(19,"tbody")(20,"tr")(21,"th"),e._uU(22,"Name"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Type"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Default value"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Description"),e.qZA()(),e.TgZ(29,"tr")(30,"td")(31,"div"),e._uU(32,"disabled"),e.qZA()(),e.TgZ(33,"td"),e._uU(34,"boolean"),e.qZA(),e.TgZ(35,"td"),e._uU(36,"null"),e.qZA(),e.TgZ(37,"td")(38,"p"),e._uU(39,"If true, the file input is readonly."),e.qZA()()(),e.TgZ(40,"tr")(41,"td")(42,"div"),e._uU(43,"multiple"),e.qZA()(),e.TgZ(44,"td"),e._uU(45,"boolean"),e.qZA(),e.TgZ(46,"td"),e._uU(47,"false"),e.qZA(),e.TgZ(48,"td")(49,"p"),e._uU(50,"If true, the file input allows the user to select more than one file. "),e.qZA()()(),e.TgZ(51,"tr")(52,"td")(53,"div"),e._uU(54,"accept"),e.qZA()(),e.TgZ(55,"td"),e._uU(56,"string"),e.qZA(),e.TgZ(57,"td"),e._uU(58,"null"),e.qZA(),e.TgZ(59,"td")(60,"p"),e._uU(61,'Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) '),e.qZA()()(),e.TgZ(62,"tr")(63,"td")(64,"div"),e._uU(65,"color"),e.qZA()(),e.TgZ(66,"td"),e._uU(67,"ThemePalette"),e.qZA(),e.TgZ(68,"td"),e._uU(69,"null"),e.qZA(),e.TgZ(70,"td")(71,"p"),e._uU(72,"Theme color palette for the component. "),e.qZA()()()()(),e.TgZ(73,"h2"),e._uU(74,"Theming"),e.qZA(),e.TgZ(75,"p"),e._uU(76,"@see @angular/material "),e.TgZ(77,"a",5),e._uU(78,"Using a pre-built theme"),e.qZA()(),e.TgZ(79,"p"),e._uU(80,"Add the Material Design icon font to your index.html"),e.qZA(),e.TgZ(81,"pre")(82,"code",6),e._uU(83),e.qZA()()(),e.TgZ(84,"mat-tab",7)(85,"mat-card",8)(86,"mat-form-field"),e._UZ(87,"ngx-mat-file-input",9),e.qZA()(),e.TgZ(88,"mat-card",10)(89,"div",11),e._uU(90,"Selected file(s):"),e.qZA(),e.TgZ(91,"div",12)(92,"ul"),e.YNc(93,E,2,1,"li",13),e.qZA()()(),e.TgZ(94,"mat-card",14)(95,"div",11),e._uU(96),e.qZA(),e.TgZ(97,"div",12),e._uU(98),e.ALo(99,"json"),e.qZA()(),e.TgZ(100,"mat-card",15)(101,"div",16)(102,"span",17),e._uU(103,"disabled (Default: false) "),e.qZA(),e.TgZ(104,"mat-radio-group",18),e.NdJ("ngModelChange",function(a){return n.onDisabledChanged(a)}),e.YNc(105,V,2,2,"mat-radio-button",19),e.qZA()(),e.TgZ(106,"div",16)(107,"span",17),e._uU(108,"multiple (Default: false) "),e.qZA(),e.TgZ(109,"mat-radio-group",18),e.NdJ("ngModelChange",function(a){return n.multiple=a}),e.YNc(110,H,2,2,"mat-radio-button",19),e.qZA()(),e.TgZ(111,"div",16)(112,"span",17),e._uU(113,"accept (Default: null) "),e.qZA(),e.TgZ(114,"mat-form-field")(115,"mat-label"),e._uU(116,"Select accept"),e.qZA(),e.TgZ(117,"mat-select",20),e.NdJ("ngModelChange",function(a){return n.accept=a}),e.YNc(118,k,2,2,"mat-option",21),e.qZA()()(),e.TgZ(119,"div",16)(120,"span",17),e._uU(121,"color (Default: primary) "),e.qZA(),e.TgZ(122,"mat-form-field")(123,"mat-label"),e._uU(124,"Select color"),e.qZA(),e.TgZ(125,"mat-select",20),e.NdJ("ngModelChange",function(a){return n.color=a}),e.YNc(126,G,2,2,"mat-option",21),e.qZA()()()(),e.TgZ(127,"pre")(128,"code",22),e._uU(129),e.qZA()(),e.TgZ(130,"h4"),e._uU(131,"You can provide a custom icon by using the directive ngxMatFileInputIcon"),e.qZA(),e.TgZ(132,"pre")(133,"code",22),e._uU(134),e.qZA()(),e.TgZ(135,"mat-form-field")(136,"ngx-mat-file-input",23)(137,"mat-icon",24),e._uU(138,"folder"),e.qZA()()(),e.TgZ(139,"h4"),e._uU(140,"You can use with all properties of MatFormField such as appearance variants, hint..."),e.qZA(),e.TgZ(141,"pre")(142,"code",22),e._uU(143),e.qZA()(),e.TgZ(144,"mat-form-field",25),e._UZ(145,"ngx-mat-file-input",23),e.TgZ(146,"mat-hint"),e._uU(147),e.qZA()()()()),2&t&&(e.xp6(10),e.Oqu(n.code1),e.xp6(5),e.Oqu(n.code2),e.xp6(68),e.Oqu(n.code6),e.xp6(4),e.Q6J("formControl",n.fileControl)("multiple",n.multiple)("accept",n.accept)("color",n.color),e.xp6(6),e.Q6J("ngForOf",n.files),e.xp6(3),e.hij("Errors (Max size: ",n.maxSize,"Ko)"),e.xp6(2),e.Oqu(e.lcZ(99,24,n.fileControl.errors)),e.xp6(6),e.Q6J("ngModel",n.disabled),e.xp6(1),e.Q6J("ngForOf",n.options),e.xp6(4),e.Q6J("ngModel",n.multiple),e.xp6(1),e.Q6J("ngForOf",n.options),e.xp6(7),e.Q6J("ngModel",n.accept),e.xp6(1),e.Q6J("ngForOf",n.listAccepts),e.xp6(7),e.Q6J("ngModel",n.color),e.xp6(1),e.Q6J("ngForOf",n.listColors),e.xp6(3),e.Oqu(n.code3),e.xp6(5),e.Oqu(n.code4),e.xp6(2),e.Q6J("formControl",n.file2Control),e.xp6(7),e.Oqu(n.code5),e.xp6(2),e.Q6J("formControl",n.file3Control),e.xp6(2),e.hij("",n.nbFiles," selected file(s)"))},dependencies:[c.sg,s.KE,s.hX,s.bx,r.JJ,r.On,r.oH,C.VQ,C.U0,A.gD,b.ey,h.Hw,T.a8,p,u,Y.P,y.uX,y.SP,c.Ts],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}pre[_ngcontent-%COMP%]{background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.03);border-radius:5px;display:block;overflow-x:auto;padding:20px;white-space:pre-wrap;font-family:Roboto Mono,monospace}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:transparent;padding:0;font-size:100%}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f;border-collapse:collapse;border-spacing:2px;border-color:gray}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:block}"]});const B=[{path:"",component:g}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[c.ez,U.Bz.forChild(B),I.FA,v.c,r.u5,r.UX,Z.ot,O.K,C.Fk,A.LD,q.p9,h.Ps,T.QW,m,R.m]})}}]);