"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[334],{2334:(E,f,l)=>{l.r(f),l.d(f,{DndPointBuyModule:()=>H});var m=l(8583),d=l(665),T=l(3114),v=l(4207),C=l(7745),w=l(103),b=l(705),Z=l(3928),D=l(4714),A=l(4020),S=l(7150),i=l(50),r=l(5868);class h{constructor(u,e,n){this.name=u,this.raceModifier=e,this.points=n,n||(n=0)}}var t=l(639),x=l(9075),P=l(3013);const _=["selectableAttribute1"],y=["selectableAttribute2"];function N(a,u){1&a&&(t.TgZ(0,"label",21),t._uU(1,"Attribute 1 "),t.qZA())}function M(a,u){1&a&&(t.TgZ(0,"label",21),t._uU(1,"Attribute 2 "),t.qZA())}function B(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",11),t.TgZ(1,"p-dropdown",22,23),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().selectableAttributeOne=o})("onChange",function(o){return t.CHM(e),t.oxw().updateAvailableSpecialAttributes(1,o)}),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("options",e.characterAttributes1)("ngModel",e.selectableAttributeOne)("autoDisplayFirst",!1)}}function R(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",11),t.TgZ(1,"p-dropdown",24,25),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().selectableAttributeTwo=o})("onChange",function(o){return t.CHM(e),t.oxw().updateAvailableSpecialAttributes(2,o)}),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("options",e.characterAttributes2)("ngModel",e.selectableAttributeTwo)("autoDisplayFirst",!1)}}function O(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"tr",26),t.TgZ(1,"td",11),t._UZ(2,"input",13),t.qZA(),t.TgZ(3,"td",11),t.TgZ(4,"p-inputNumber",27),t.NdJ("onInput",function(o){return t.CHM(e),t.oxw().updateStats("statsForm",o)})("onBlur",function(o){return t.CHM(e),t.oxw().updateStats("statsForm",o)})("ngModelChange",function(o){return u.$implicit.points=o}),t.qZA(),t.qZA(),t.TgZ(5,"td",11),t._UZ(6,"input",13),t.qZA(),t.TgZ(7,"td",11),t._UZ(8,"input",13),t.qZA(),t.qZA()}if(2&a){const e=u.$implicit,n=t.oxw();t.xp6(2),t.Q6J("value",e.name),t.xp6(2),t.Q6J("name",e.name)("min",0)("max",n.getMaximumPoints(e))("minFractionDigits",0)("maxFractionDigits",0)("showButtons",!0)("ngModel",e.points),t.xp6(2),t.Q6J("value",n.getRacialStat(e)),t.xp6(2),t.Q6J("value",n.getComputedStat(e))}}const I=[{path:"",component:(()=>{class a{constructor(e){this.titleService=e,this.STR="STR",this.DEX="DEX",this.CON="CON",this.INT="INT",this.WIS="WIS",this.CHR="CHR",this.globals=new S.O,this.availablePoints=27,this.maximumAvailablePoints=27,this.titleService.setTitle("D&D 5th Edition Stat Point Buy"),this.createRaceInfo(),this.createCharacterAttributes()}ngOnInit(){}updateStats(e,n){if(this.globals.validateForm(e)){let o=this.maximumAvailablePoints;for(const s of this.characterAttributes){let c=s.points;isNaN(c)?s.points=0:(c=+c,o-=c>this.maximumAvailablePoints||c<0?0:c)}this.availablePoints=o}}updateAvailableSpecialAttributes(e,n){let o=null,s=null,c=null,g=null;1===e?(o=this.dropdownAttribute1,s=this.dropdownAttribute2):(o=this.dropdownAttribute2,s=this.dropdownAttribute1),c=o.selectedOption,g=s.selectedOption;const F=o.options,q=s.options;if(g)for(const p of F)p.disabled=p.value.name===g.value.name;if(c)for(const p of q)p.disabled=p.value.name===c.value.name}createRaceInfo(){this.races=[new r.m("Human",[new i.v(this.STR,1),new i.v(this.DEX,1),new i.v(this.CON,1),new i.v(this.INT,1),new i.v(this.WIS,1),new i.v(this.CHR,1)]),new r.m("Human (Variant)",[]),new r.m("Half-Elf",[new i.v(this.CHR,2)]),new r.m("Dragonborn",[new i.v(this.CHR,1),new i.v(this.STR,2)]),new r.m("Dwarf (Hill)",[new i.v(this.WIS,1),new i.v(this.CON,2)]),new r.m("Dwarf (Mountain)",[new i.v(this.STR,2),new i.v(this.CON,2)]),new r.m("Dwarf (Deurgar)",[new i.v(this.STR,1),new i.v(this.CON,2)]),new r.m("Elf (High)",[new i.v(this.INT,1),new i.v(this.DEX,2)]),new r.m("Elf (Wood)",[new i.v(this.WIS,1),new i.v(this.DEX,2)]),new r.m("Elf (Drow)",[new i.v(this.CHR,1),new i.v(this.DEX,2)]),new r.m("Elf (Eladrin)",[new i.v(this.INT,1),new i.v(this.DEX,2)]),new r.m("Elf (Sea)",[new i.v(this.CON,1),new i.v(this.DEX,2)]),new r.m("Gnome (Forest)",[new i.v(this.DEX,1),new i.v(this.INT,2)]),new r.m("Gnome (Rock)",[new i.v(this.CON,1),new i.v(this.INT,2)]),new r.m("Gnome (Deep)",[new i.v(this.DEX,1),new i.v(this.INT,2)]),new r.m("Half-Orc",[new i.v(this.CON,1),new i.v(this.STR,2)]),new r.m("Halfling (Deurgar)",[new i.v(this.CHR,1),new i.v(this.DEX,2)]),new r.m("Halfling (Stout)",[new i.v(this.CON,1),new i.v(this.DEX,2)]),new r.m("Halfling (Ghostwise)",[new i.v(this.WIS,1),new i.v(this.DEX,2)]),new r.m("Tiefling",[new i.v(this.INT,1),new i.v(this.CHR,2)])]}createCharacterAttributes(){this.characterAttributes=[new h(this.STR,0,0),new h(this.DEX,0,0),new h(this.CON,0,0),new h(this.INT,0,0),new h(this.WIS,0,0),new h(this.CHR,0,0)],this.characterAttributes1=JSON.parse(JSON.stringify(this.characterAttributes)),this.characterAttributes2=JSON.parse(JSON.stringify(this.characterAttributes))}showSelectableStatDropdowns(){return this.currentRace&&("Human (Variant)"===this.currentRace.name||"Half-Elf"===this.currentRace.name)}getComputedStat(e){return 8+this.getStatModifierBasedOnPoints(e.points)+this.getRacialStat(e)}getMaximumPoints(e){let n=9;const o=n-e.points;return 0===this.availablePoints?n=e.points:o>this.availablePoints||0===o?o+this.availablePoints<n&&(n=o+this.availablePoints,o>this.availablePoints?n=e.points+this.availablePoints:n<e.points&&(n=e.points)):o<0?(e.points=0,n=n):n=this.availablePoints+e.points,n}getStatModifierBasedOnPoints(e){if(!isNaN(e)){if((e=+e)<=5)return e;switch(e){case 6:return 5;case 7:case 8:return 6;case 9:return 7}}return 0}getRacialStat(e){if(this.currentRace){if(this.showSelectableStatDropdowns()&&(this.selectableAttributeOne&&this.selectableAttributeOne.name===e.name||this.selectableAttributeTwo&&this.selectableAttributeTwo.name===e.name))return 1;if(this.currentRace.modifiers)for(const n of this.currentRace.modifiers)if(n.attributeName===e.name)return n.value}return 0}resetPoints(){for(const e of this.characterAttributes)e.points=0;this.availablePoints=this.maximumAvailablePoints}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(x.Dx))},a.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],viewQuery:function(e,n){if(1&e&&(t.Gf(_,7),t.Gf(y,7)),2&e){let o;t.iGM(o=t.CRH())&&(n.dropdownAttribute1=o.first),t.iGM(o=t.CRH())&&(n.dropdownAttribute2=o.first)}},decls:47,vars:9,consts:[[1,"grid"],[1,"col-12","align-text-center"],[1,"col-12"],[1,"sm:col-12","xl:col-8","xl:col-offset-2"],[1,"align-text-center"],[1,"ui-card-title"],["name","raceForm","id","raceForm","autocomplete","off"],[1,"grid","pad-top-5"],[1,"col-3","align-text-center"],[1,"col-3","align-text-center",2,"padding-top","0px"],["class","col-3 no-wrap align-text-center",4,"ngIf"],[1,"col-3"],["name","raceSelector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["pInputText","","readonly","",1,"col-12","align-text-center",3,"value"],["class","col-3",4,"ngIf"],[1,"col-12","py-0"],["id","statsForm","name","statsForm","autocomplete","off"],[1,"col-3","px-0"],[1,"font-weight-bold","no-wrap","align-text-center"],["pButton","","type","button","icon","pi pi-refresh","iconPos","left",1,"ui-button-rounded","ui-button-info","small-icon-button","reset-button",3,"click"],["class","pad-top-5",4,"ngFor","ngForOf"],[1,"col-3","no-wrap","align-text-center"],["name","attribute1Selector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["selectableAttribute1",""],["name","attribute2Selector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["selectableAttribute2",""],[1,"pad-top-5"],[1,"col-12","align-text-center",3,"name","min","max","minFractionDigits","maxFractionDigits","showButtons","ngModel","onInput","onBlur","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"D&D 5th Edition Character Attribute Point Buy"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"hr"),t.qZA(),t.qZA(),t.TgZ(5,"div",0),t.TgZ(6,"div",3),t.TgZ(7,"p-panel",2),t.TgZ(8,"p-header",4),t.TgZ(9,"span",5),t._uU(10,"Player Stats"),t.qZA(),t.qZA(),t.TgZ(11,"form",6),t.TgZ(12,"div",7),t.TgZ(13,"label",8),t._uU(14,"Race "),t.qZA(),t.TgZ(15,"label",9),t._uU(16,"Available Points"),t.qZA(),t.YNc(17,N,2,0,"label",10),t.YNc(18,M,2,0,"label",10),t.qZA(),t.TgZ(19,"div",7),t.TgZ(20,"div",11),t.TgZ(21,"p-dropdown",12),t.NdJ("ngModelChange",function(s){return n.currentRace=s})("onChange",function(s){return n.updateStats("raceForm",s)}),t.qZA(),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"input",13),t.qZA(),t.YNc(24,B,3,3,"div",14),t.YNc(25,R,3,3,"div",14),t.qZA(),t.qZA(),t.TgZ(26,"div",0),t._UZ(27,"hr",15),t.qZA(),t.TgZ(28,"form",16),t.TgZ(29,"div",0),t.TgZ(30,"table",2),t.TgZ(31,"thead"),t.TgZ(32,"th",17),t.TgZ(33,"span",18),t._uU(34,"Name"),t.qZA(),t.qZA(),t.TgZ(35,"th",17),t.TgZ(36,"span",18),t._uU(37," Points "),t.TgZ(38,"button",19),t.NdJ("click",function(){return n.resetPoints()}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"th",17),t.TgZ(40,"span",18),t._uU(41,"Race"),t.qZA(),t.qZA(),t.TgZ(42,"th",17),t.TgZ(43,"span",18),t._uU(44,"Result"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"tbody"),t.YNc(46,O,9,10,"tr",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(17),t.Q6J("ngIf",n.showSelectableStatDropdowns()),t.xp6(1),t.Q6J("ngIf",n.showSelectableStatDropdowns()),t.xp6(3),t.Q6J("options",n.races)("ngModel",n.currentRace)("autoDisplayFirst",!1),t.xp6(2),t.Q6J("value",n.availablePoints),t.xp6(1),t.Q6J("ngIf",n.showSelectableStatDropdowns()),t.xp6(1),t.Q6J("ngIf",n.showSelectableStatDropdowns()),t.xp6(21),t.Q6J("ngForOf",n.characterAttributes))},directives:[A.s,P.h4,d._Y,d.JL,d.F,m.O5,w.Lt,d.JJ,d.On,Z.o,v.Hq,m.sg,b.Rn],styles:[".reset-button[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;width:1.8rem}"]}),a})()}];let H=(()=>{class a{constructor(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[m.ez,d.u5,C.d,w.kW,Z.j,v.hJ,b.L$,D.ON,A.Q,T.Bz.forChild(I)]]}),a})()}}]);