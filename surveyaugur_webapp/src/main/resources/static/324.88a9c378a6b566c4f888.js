(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>p});var i=n(8583),s=n(4655),r=n(7716),u=n(1841),c=n(2199),o=n(5939);function a(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"h1"),r._uU(2),r.qZA(),r.TgZ(3,"button",5),r._uU(4,"Activate"),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.surveyTitle)}}function v(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"h1"),r._uU(2),r.qZA(),r.TgZ(3,"button",5),r._uU(4,"Activate"),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.title)}}const l=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.inactiveSurvey=[],this.activeSurvey=[]}ngOnInit(){this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey)}),this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{this.activeSurvey=t.result,console.log(t),console.log(this.activeSurvey)})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(u.eN),r.Y36(c._))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-surveys"]],decls:10,vars:2,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],[4,"ngFor","ngForOf"],["label","InActive Surveys"],["mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(r.TgZ(0,"p",0),r._uU(1,"Surveys"),r.qZA(),r._UZ(2,"hr",1),r.TgZ(3,"mat-tab-group"),r.TgZ(4,"mat-tab",2),r._uU(5,"List of Active Surveys "),r.YNc(6,a,5,1,"div",3),r.qZA(),r.TgZ(7,"mat-tab",4),r._uU(8,"List of InActive Surveys "),r.YNc(9,v,5,1,"div",3),r.qZA(),r.qZA()),2&t&&(r.xp6(6),r.Q6J("ngForOf",e.activeSurvey),r.xp6(3),r.Q6J("ngForOf",e.inactiveSurvey))},directives:[o.SP,o.uX,i.sg],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}#Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,g,o.Nh,u.JF]]}),t})()}}]);