(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[254],{2254:(t,e,o)=>{"use strict";o.r(e),o.d(e,{questiongroupsModule:()=>Y});var n=o(8583),i=o(8295),a=o(4655),r=o(6461);class s{}var u=o(7716),c=o(1841);let p=(()=>{class t{constructor(t){this.http=t,this.userId="74ba1ba6-9cc4-4737-953e-a96fd2df8d60",this.save="/surveyauthor/api/v1/questiongroups/users/",this.getQuesGrpByCreator="/surveyauthor/api/v1/questiongroups/users/",this.updateqQesGrp="/surveyauthor/api/v1//questiongroups/{questionGroup_id}",this.getQuesGrpByQId="/surveyauthor/api/v1/questiongroups/"}getByUserId(){return this.http.get(this.getQuesGrpByCreator+this.userId)}getByQuesGrpId(t){return this.http.get(this.getQuesGrpByQId+t)}saveQuestionGrp(t){return this.http.post(this.save+this.userId,t)}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(c.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=o(2238),d=o(3679),m=o(3166),g=o(8341),h=o(1095),Z=o(6627);function f(t,e){1&t&&(u.TgZ(0,"mat-icon",18),u._uU(1,"cancel"),u.qZA())}function w(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",16),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw().remove(e)}),u._uU(1),u.YNc(2,f,2,0,"mat-icon",17),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw();u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}let q=(()=>{class t{constructor(t){this.quesGrpService=t,this.quesGrp=new s,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[r.K5,r.OC],this.tags=[]}add(t){const e=(t.value||"").trim();e&&this.tags.push(e),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}ngOnInit(){}getData(t){this.quesGrp.tags=this.tags,this.quesGrpService.saveQuestionGrp(this.quesGrp),console.log(this.quesGrp)}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-addquestiongroup"]],decls:28,vars:6,consts:[["mat-dialog-title","",2,"background-color","#f7703f","text-align","center"],[1,"mat-typography",2,"height","500px","width","500px"],[1,"example-form",3,"ngSubmit"],["basicForm","ngForm"],["cellspacing","0",1,"example-full-width",2,"margin-top","30px"],["appearance","fill",1,"example-full-width"],["matInput","","type","text","name","questionGroupName","id","name","required","",3,"ngModel","ngModelChange"],["name","ngModel"],["appearance","fill",1,"example-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["type","text","ngModel","","name","questionTags","placeholder","New Tag",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["align","end"],["mat-button","","mat-dialog-close",""],["type","submit","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"h2",0),u._uU(1,"ADD QuestionGroup"),u.qZA(),u._UZ(2,"hr"),u.TgZ(3,"mat-dialog-content",1),u.TgZ(4,"form",2,3),u.NdJ("ngSubmit",function(){u.CHM(t);const o=u.MAs(5);return e.getData(o.value)}),u.TgZ(6,"table",4),u.TgZ(7,"tr"),u.TgZ(8,"td"),u.TgZ(9,"mat-form-field",5),u.TgZ(10,"mat-label"),u._uU(11,"QuestionGroup Name:"),u.qZA(),u.TgZ(12,"input",6,7),u.NdJ("ngModelChange",function(t){return e.quesGrp.name=t}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"tr"),u.TgZ(15,"td"),u.TgZ(16,"mat-form-field",8),u.TgZ(17,"mat-label"),u._uU(18,"Question Tags"),u.qZA(),u.TgZ(19,"mat-chip-list",9,10),u.YNc(21,w,3,4,"mat-chip",11),u.TgZ(22,"input",12),u.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"mat-dialog-actions",13),u.TgZ(24,"button",14),u._uU(25,"Cancel"),u.qZA(),u.TgZ(26,"button",15),u._uU(27,"Submit"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(20);u.xp6(12),u.Q6J("ngModel",e.quesGrp.name),u.xp6(9),u.Q6J("ngForOf",e.tags),u.xp6(1),u.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),u.xp6(4),u.Q6J("mat-dialog-close",!0)}},directives:[l.uh,l.xY,d._Y,d.JL,d.F,i.KE,i.hX,m.Nt,d.Fj,d.Q7,d.JJ,d.On,g.qn,n.sg,g.oH,l.H8,h.lW,l.ZT,g.HS,n.O5,Z.Hw,g.qH],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;font-size:medium;color:#f7703f}td[_ngcontent-%COMP%]{padding-right:8px}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),t})();var b=o(8590);function A(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2,"QuestionGroup-Home "),u.qZA(),u._UZ(3,"hr"),u._UZ(4,"br"),u._UZ(5,"br"),u._UZ(6,"br"),u.TgZ(7,"div"),u.TgZ(8,"h2",1),u._uU(9,"Create Your First QuestionGroup"),u.qZA(),u.qZA(),u._UZ(10,"br"),u._UZ(11,"br"),u._UZ(12,"br"),u.TgZ(13,"div",2),u.TgZ(14,"div",3),u.TgZ(15,"button",4),u.NdJ("click",function(){return u.CHM(t),u.oxw().openDialog()}),u.TgZ(16,"mat-icon",5),u._uU(17,"add"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()}}function T(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u.TgZ(8,"mat-icon",10),u._uU(9,"edit"),u.qZA(),u.qZA(),u.qZA()),2&t){const t=e.$implicit,o=e.index;u.xp6(2),u.Oqu(o),u.xp6(2),u.Oqu(t.name),u.xp6(2),u.Oqu(t.createdOn)}}function _(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2,"QuestionGroup-Home "),u.qZA(),u._UZ(3,"hr"),u.TgZ(4,"div",6),u.TgZ(5,"table"),u.TgZ(6,"tr"),u.TgZ(7,"th"),u._uU(8,"Si.No"),u.qZA(),u.TgZ(9,"th"),u._uU(10,"Question"),u.qZA(),u.TgZ(11,"th"),u._uU(12,"CreatedOn"),u.qZA(),u.TgZ(13,"th"),u._uU(14,"Actions"),u.qZA(),u.qZA(),u.YNc(15,T,10,3,"tr",7),u.qZA(),u.qZA(),u.TgZ(16,"div",8),u.TgZ(17,"button",9),u.NdJ("click",function(){return u.CHM(t),u.oxw().openDialog()}),u.TgZ(18,"mat-icon"),u._uU(19,"add"),u.qZA(),u.qZA(),u.qZA(),u._UZ(20,"router-outlet"),u.qZA()}if(2&t){const t=u.oxw();u.xp6(15),u.Q6J("ngForOf",t.questionGroups)}}let x=(()=>{class t{constructor(t,e,o){this.dialog=t,this.router=e,this.questionGrpService=o,this.questionGroups=[],this.show=!1,this.position=1,this.displayedColumns=["position","name","createdOn","Actions"],this.dataSource=this.questionGroups}ngOnInit(){this.questionGrpService.getByUserId().subscribe(t=>{this.questionGroups.push(t.result),console.log(t),console.log(this.questionGroups)}),0==this.questionGroups.length&&(this.show=!0,console.log(this.show)),console.log(this.show)}openDialog(){this.dialog.open(q).afterClosed().subscribe(t=>{console.log(`Dialog result: ${t}`)})}getData(){}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.uw),u.Y36(a.F0),u.Y36(p))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongroups"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"text-align","center"],[1,"container"],[1,"center"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f","height","130px","width","130px",3,"click"],[2,"font-size","30px","text-align","center"],[2,"margin-top","20px"],[4,"ngFor","ngForOf"],[1,"downright"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f",3,"click"],["matTooltip","Edit",1,"myIcons"]],template:function(t,e){1&t&&(u.YNc(0,A,18,0,"div",0),u.YNc(1,_,21,1,"div",0)),2&t&&(u.Q6J("ngIf",!e.show),u.xp6(1),u.Q6J("ngIf",e.show))},directives:[n.O5,h.lW,Z.Hw,n.sg,a.lC,b.gM],styles:[".container[_ngcontent-%COMP%]{height:200px;position:relative}.center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.demo-table[_ngcontent-%COMP%]{width:100%}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-createdOn[_ngcontent-%COMP%]{flex:0 0 20%!important;width:20%!important}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-createdOn[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important;justify-content:center}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse;width:100%;margin-top:10px}th[_ngcontent-%COMP%]{text-align:left;padding:15px;background-color:#f5c17d}td[_ngcontent-%COMP%]{border:1px solid #ddd;text-align:left;padding:8px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#ddd}"]}),t})();var C=o(2789);function y(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," SNo. "),u.qZA())}function v(t,e){if(1&t&&(u.TgZ(0,"mat-cell",17),u.TgZ(1,"b"),u._uU(2),u.qZA(),u.qZA()),2&t){const t=e.$implicit;u.xp6(2),u.Oqu(t.position+".")}}function O(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," Question Body "),u.qZA())}function k(t,e){if(1&t&&(u.TgZ(0,"mat-cell",18),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij("",t.questionBody," ")}}function U(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," Question Type "),u.qZA())}function M(t,e){if(1&t&&(u.TgZ(0,"mat-cell",18),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",t.questionType," ")}}function Q(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," Actions "),u.qZA())}function G(t,e){1&t&&(u.TgZ(0,"mat-cell"),u.TgZ(1,"mat-icon",19),u._uU(2,"edit"),u.qZA(),u.TgZ(3,"mat-icon",20),u._uU(4,"delete"),u.qZA(),u.qZA())}function I(t,e){1&t&&u._UZ(0,"mat-header-row")}function P(t,e){1&t&&u._UZ(0,"mat-row")}const D=function(){return["questions"]},N=[{position:1,questionBody:"Is Java Object Oriented Language?",questionType:"Java"},{position:2,questionBody:"What is Spring?",questionType:"Spring"}],B=[{path:"",component:x},{path:"questiongrouphome/:id",component:(()=>{class t{constructor(){this.displayedColumns=["position","questionBody","questionType","Actions"],this.dataSource=N}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongrouphome"]],decls:33,vars:5,consts:[["xmlns","http://www.w3.org/1999/html"],[1,"contents"],[1,"txtSize"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","questionBody"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","questionType"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","matTooltip","Click to Add Questions",2,"background-color","#f7703f",3,"routerLink"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],["matTooltip","Edit",1,"myIcons"],["matTooltip","Delete",1,"myIcons"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"h2"),u._uU(2,"Question Group Name"),u.qZA(),u._UZ(3,"hr"),u.qZA(),u.TgZ(4,"div",1),u._UZ(5,"br"),u.TgZ(6,"b",2),u._uU(7,"Question Group Tags :"),u.qZA(),u._UZ(8,"br"),u._UZ(9,"br"),u._UZ(10,"br"),u.TgZ(11,"b",2),u._uU(12,"Question Group creation Date :"),u.qZA(),u.qZA(),u.TgZ(13,"div"),u.TgZ(14,"mat-table",3),u.ynx(15,4),u.YNc(16,y,2,0,"mat-header-cell",5),u.YNc(17,v,3,1,"mat-cell",6),u.BQk(),u.ynx(18,7),u.YNc(19,O,2,0,"mat-header-cell",5),u.YNc(20,k,2,1,"mat-cell",8),u.BQk(),u.ynx(21,9),u.YNc(22,U,2,0,"mat-header-cell",5),u.YNc(23,M,2,1,"mat-cell",8),u.BQk(),u.ynx(24,10),u.YNc(25,Q,2,0,"mat-header-cell",5),u.YNc(26,G,5,0,"mat-cell",11),u.BQk(),u.YNc(27,I,1,0,"mat-header-row",12),u.YNc(28,P,1,0,"mat-row",13),u.qZA(),u.qZA(),u.TgZ(29,"div",14),u.TgZ(30,"button",15),u.TgZ(31,"mat-icon"),u._uU(32,"add"),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(14),u.Q6J("dataSource",e.dataSource),u.xp6(13),u.Q6J("matHeaderRowDef",e.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",e.displayedColumns),u.xp6(2),u.Q6J("routerLink",u.DdM(4,D)))},directives:[C.BZ,C.w1,C.fO,C.Dz,C.as,C.nj,h.lW,b.gM,a.rH,Z.Hw,C.ge,C.ev,C.XQ,C.Gk],styles:[".contents[_ngcontent-%COMP%]{height:20%;width:100%;background-color:#d3d3d3}.txtSize[_ngcontent-%COMP%]{font-size:medium;padding-left:40px}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-position[_ngcontent-%COMP%], .mat-column-questionBody[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-questionType[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;justify-content:center;-webkit-hyphens:auto;hyphens:auto}.mat-elevation-z8[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;margin-top:20px}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[a.Bz.forChild(B)],a.Bz]}),t})();var S=o(3738);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,J,h.ot,Z.Ps,l.Is,d.UX,i.lN,S.QW,m.c,g.Hi,d.u5,C.p0,b.AV,a.Bz,c.JF],a.Bz]}),t})()}}]);