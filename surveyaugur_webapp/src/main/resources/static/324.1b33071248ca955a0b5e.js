(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>Z});var i=n(8583),u=n(1095),s=n(4655),r=n(7716),o=n(1841),c=n(2199),a=n(5939);function l(t,e){if(1&t&&(r.TgZ(0,"tr"),r.TgZ(1,"td"),r._uU(2),r.qZA(),r._uU(3,"\xa0\xa0\xa0\xa0\xa0\xa0 "),r.TgZ(4,"td"),r._uU(5),r.qZA(),r._uU(6,"\xa0\xa0\xa0 "),r.TgZ(7,"td"),r.TgZ(8,"button",6),r._uU(9,"Preview"),r.qZA(),r.TgZ(10,"button",7),r._uU(11,"DeActivate"),r.qZA(),r.qZA(),r.qZA()),2&t){const t=e.$implicit,n=r.oxw();r.xp6(2),r.hij(" ",n.count+1,""),r.xp6(3),r.hij(" ",t.surveyTitle," ")}}function v(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"h1"),r._uU(2),r.qZA(),r.TgZ(3,"button",7),r._uU(4,"Activate"),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.title)}}const g=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.count=0,this.inactiveSurvey=[],this.activeSurvey=[]}ngOnInit(){this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey)}),this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{this.activeSurvey=t.result,console.log(t),console.log(this.activeSurvey)})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.eN),r.Y36(c._))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-surveys"]],decls:22,vars:2,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],[1,"table","table-stripe"],[4,"ngFor","ngForOf"],["label","InActive Surveys"],["mat-raised-button","","color","accent"],["mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(r.TgZ(0,"p",0),r._uU(1,"Surveys"),r.qZA(),r._UZ(2,"hr",1),r.TgZ(3,"mat-tab-group"),r.TgZ(4,"mat-tab",2),r._uU(5,"List of Active Surveys "),r._UZ(6,"br"),r._UZ(7,"br"),r.TgZ(8,"table",3),r.TgZ(9,"tr"),r.TgZ(10,"th"),r._uU(11,"S no"),r.qZA(),r._uU(12,"\xa0\xa0\xa0 "),r.TgZ(13,"th"),r._uU(14,"SurveyTitle"),r.qZA(),r._uU(15,"\xa0\xa0\xa0 "),r.TgZ(16,"th"),r._uU(17,"Actions"),r.qZA(),r.qZA(),r.YNc(18,l,12,2,"tr",4),r.qZA(),r.qZA(),r.TgZ(19,"mat-tab",5),r._uU(20,"List of InActive Surveys "),r.YNc(21,v,5,1,"div",4),r.qZA(),r.qZA()),2&t&&(r.xp6(18),r.Q6J("ngForOf",e.activeSurvey),r.xp6(3),r.Q6J("ngForOf",e.inactiveSurvey))},directives:[a.SP,a.uX,i.sg,u.lW],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,p,a.Nh,o.JF,u.ot]]}),t})()}}]);