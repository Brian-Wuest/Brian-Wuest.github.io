(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3fhp":function(t,e,i){"use strict";i.r(e),i.d(e,"DndPointBuyModule",(function(){return P}));var n=i("ofXK"),a=i("3Pt+"),s=i("jIHw"),o=i("QIUk"),r=i("arFO"),c=i("7kUa"),b=i("+07z"),l=i("ImVz"),u=i("xtzn"),h=i("0uv+"),d=i("BQL2");class p{constructor(t,e,i){this.name=t,this.raceModifier=e,this.points=i,i||(i=0)}}var w=i("fXoL"),f=i("jhN1"),S=i("7zfz");const g=["selectableAttribute1"],m=["selectableAttribute2"];function R(t,e){1&t&&(w.Sb(0,"label",21),w.Bc(1,"Attribute 1 "),w.Rb())}function v(t,e){1&t&&(w.Sb(0,"label",21),w.Bc(1,"Attribute 2 "),w.Rb())}function A(t,e){if(1&t){const t=w.Tb();w.Sb(0,"div",11),w.Sb(1,"p-dropdown",22,23),w.ac("ngModelChange",(function(e){return w.tc(t),w.cc().selectableAttributeOne=e}))("onChange",(function(e){return w.tc(t),w.cc().updateAvailableSpecialAttributes(1,e)})),w.Rb(),w.Rb()}if(2&t){const t=w.cc();w.Bb(1),w.ic("options",t.characterAttributes1)("ngModel",t.selectableAttributeOne)("autoDisplayFirst",!1)}}function C(t,e){if(1&t){const t=w.Tb();w.Sb(0,"div",11),w.Sb(1,"p-dropdown",24,25),w.ac("ngModelChange",(function(e){return w.tc(t),w.cc().selectableAttributeTwo=e}))("onChange",(function(e){return w.tc(t),w.cc().updateAvailableSpecialAttributes(2,e)})),w.Rb(),w.Rb()}if(2&t){const t=w.cc();w.Bb(1),w.ic("options",t.characterAttributes2)("ngModel",t.selectableAttributeTwo)("autoDisplayFirst",!1)}}function D(t,e){if(1&t){const t=w.Tb();w.Sb(0,"tr",26),w.Sb(1,"td",11),w.Nb(2,"input",13),w.Rb(),w.Sb(3,"td",11),w.Sb(4,"p-spinner",27),w.ac("onChange",(function(e){return w.tc(t),w.cc().updateStats("statsForm",e)}))("ngModelChange",(function(i){return w.tc(t),e.$implicit.points=i})),w.Rb(),w.Rb(),w.Sb(5,"td",11),w.Nb(6,"input",13),w.Rb(),w.Sb(7,"td",11),w.Nb(8,"input",13),w.Rb(),w.Rb()}if(2&t){const t=e.$implicit,i=w.cc();w.Bb(2),w.ic("value",t.name),w.Bb(2),w.ic("name",t.name)("min",0)("max",i.getMaximumPoints(t))("ngModel",t.points),w.Bb(2),w.ic("value",i.getRacialStat(t)),w.Bb(2),w.ic("value",i.getComputedStat(t))}}let N=(()=>{class t{constructor(t){this.titleService=t,this.STR="STR",this.DEX="DEX",this.CON="CON",this.INT="INT",this.WIS="WIS",this.CHR="CHR",this.globals=new u.a,this.availablePoints=27,this.maximumAvailablePoints=27,this.titleService.setTitle("D&D 5th Edition Stat Point Buy"),this.createRaceInfo(),this.createCharacterAttributes()}ngOnInit(){}updateStats(t,e){if(this.globals.validateForm(t)){let t=this.maximumAvailablePoints;for(const e of this.characterAttributes){let i=e.points;isNaN(i)?e.points=0:(i=+i,t-=i>this.maximumAvailablePoints||i<0?0:i)}this.availablePoints=t}}updateAvailableSpecialAttributes(t,e){let i=null,n=null,a=null,s=null;1===t?(i=this.dropdownAttribute1,n=this.dropdownAttribute2):(i=this.dropdownAttribute2,n=this.dropdownAttribute1),a=i.selectedOption,s=n.selectedOption;const o=i.options,r=n.options;if(s)for(const c of o)c.disabled=c.value.name===s.value.name;if(a)for(const c of r)c.disabled=c.value.name===a.value.name}createRaceInfo(){this.races=[new d.a("Human",[new h.a(this.STR,1),new h.a(this.DEX,1),new h.a(this.CON,1),new h.a(this.INT,1),new h.a(this.WIS,1),new h.a(this.CHR,1)]),new d.a("Human (Variant)",[]),new d.a("Half-Elf",[new h.a(this.CHR,2)]),new d.a("Dragonborn",[new h.a(this.CHR,1),new h.a(this.STR,2)]),new d.a("Dwarf (Hill)",[new h.a(this.WIS,1),new h.a(this.CON,2)]),new d.a("Dwarf (Mountain)",[new h.a(this.STR,2),new h.a(this.CON,2)]),new d.a("Dwarf (Deurgar)",[new h.a(this.STR,1),new h.a(this.CON,2)]),new d.a("Elf (High)",[new h.a(this.INT,1),new h.a(this.DEX,2)]),new d.a("Elf (Wood)",[new h.a(this.WIS,1),new h.a(this.DEX,2)]),new d.a("Elf (Drow)",[new h.a(this.CHR,1),new h.a(this.DEX,2)]),new d.a("Elf (Eladrin)",[new h.a(this.INT,1),new h.a(this.DEX,2)]),new d.a("Elf (Sea)",[new h.a(this.CON,1),new h.a(this.DEX,2)]),new d.a("Gnome (Forest)",[new h.a(this.DEX,1),new h.a(this.INT,2)]),new d.a("Gnome (Rock)",[new h.a(this.CON,1),new h.a(this.INT,2)]),new d.a("Gnome (Deep)",[new h.a(this.DEX,1),new h.a(this.INT,2)]),new d.a("Half-Orc",[new h.a(this.CON,1),new h.a(this.STR,2)]),new d.a("Halfling (Deurgar)",[new h.a(this.CHR,1),new h.a(this.DEX,2)]),new d.a("Halfling (Stout)",[new h.a(this.CON,1),new h.a(this.DEX,2)]),new d.a("Halfling (Ghostwise)",[new h.a(this.WIS,1),new h.a(this.DEX,2)]),new d.a("Tiefling",[new h.a(this.INT,1),new h.a(this.CHR,2)])]}createCharacterAttributes(){this.characterAttributes=[new p(this.STR,0,0),new p(this.DEX,0,0),new p(this.CON,0,0),new p(this.INT,0,0),new p(this.WIS,0,0),new p(this.CHR,0,0)],this.characterAttributes1=JSON.parse(JSON.stringify(this.characterAttributes)),this.characterAttributes2=JSON.parse(JSON.stringify(this.characterAttributes))}showSelectableStatDropdowns(){return this.currentRace&&("Human (Variant)"===this.currentRace.name||"Half-Elf"===this.currentRace.name)}getComputedStat(t){return 8+this.getStatModifierBasedOnPoints(t.points)+this.getRacialStat(t)}getMaximumPoints(t){let e=9;const i=e-t.points;return 0===this.availablePoints?e=t.points:i>this.availablePoints||0===i?i+this.availablePoints<e&&(e=i+this.availablePoints,i>this.availablePoints?e=t.points+this.availablePoints:e<t.points&&(e=t.points)):i<0?(t.points=0,e=e):e=this.availablePoints+t.points,e}getStatModifierBasedOnPoints(t){if(!isNaN(t)){if((t=+t)<=5)return t;switch(t){case 6:return 5;case 7:case 8:return 6;case 9:return 7}}return 0}getRacialStat(t){if(this.currentRace){if(this.showSelectableStatDropdowns()&&(this.selectableAttributeOne&&this.selectableAttributeOne.name===t.name||this.selectableAttributeTwo&&this.selectableAttributeTwo.name===t.name))return 1;if(this.currentRace.modifiers)for(const e of this.currentRace.modifiers)if(e.attributeName===t.name)return e.value}return 0}resetPoints(){for(const t of this.characterAttributes)t.points=0;this.availablePoints=this.maximumAvailablePoints}}return t.\u0275fac=function(e){return new(e||t)(w.Mb(f.b))},t.\u0275cmp=w.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(w.wc(g,!0),w.wc(m,!0)),2&t&&(w.rc(i=w.bc())&&(e.dropdownAttribute1=i.first),w.rc(i=w.bc())&&(e.dropdownAttribute2=i.first))},decls:47,vars:9,consts:[[1,"ui-g"],[1,"ui-g-12","align-text-center"],[1,"ui-g-12"],[1,"ui-sm-12","ui-md-8","ui-md-offset-2"],[1,"align-text-center"],[1,"ui-card-title"],["name","raceForm","id","raceForm","autocomplete","off"],[1,"ui-g","pad-top-5"],[1,"ui-g-3","align-text-center"],[1,"ui-g-3","align-text-center",2,"padding-top","0px"],["class","ui-g-3 no-wrap align-text-center",4,"ngIf"],[1,"ui-g-3"],["name","raceSelector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["pInputText","","readonly","",1,"ui-g-12","align-text-center",3,"value"],["class","ui-g-3",4,"ngIf"],[1,"ui-g-12","no-pad-top-bottom"],["id","statsForm","name","statsForm","autocomplete","off"],[1,"ui-g-3","no-pad-right-left"],[1,"font-weight-bold","no-wrap","align-text-center"],["pButton","","type","button","icon","fas fa-sync","iconPos","left",1,"ui-button-rounded","ui-button-info","small-icon-button",3,"click"],["class","pad-top-5",4,"ngFor","ngForOf"],[1,"ui-g-3","no-wrap","align-text-center"],["name","attribute1Selector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["selectableAttribute1",""],["name","attribute2Selector","optionLabel","name",3,"options","ngModel","autoDisplayFirst","ngModelChange","onChange"],["selectableAttribute2",""],[1,"pad-top-5"],[1,"ui-g-12","align-text-center",3,"name","min","max","ngModel","onChange","ngModelChange"]],template:function(t,e){1&t&&(w.Sb(0,"div",0),w.Sb(1,"h1",1),w.Bc(2," D&D 5th Edition Character Attribute Point Buy "),w.Rb(),w.Sb(3,"div",2),w.Nb(4,"hr"),w.Rb(),w.Rb(),w.Sb(5,"div",0),w.Sb(6,"div",3),w.Sb(7,"p-card",2),w.Sb(8,"p-header",4),w.Sb(9,"span",5),w.Bc(10,"Player Stats"),w.Rb(),w.Rb(),w.Sb(11,"form",6),w.Sb(12,"div",7),w.Sb(13,"label",8),w.Bc(14,"Race "),w.Rb(),w.Sb(15,"label",9),w.Bc(16,"Available Points"),w.Rb(),w.zc(17,R,2,0,"label",10),w.zc(18,v,2,0,"label",10),w.Rb(),w.Sb(19,"div",7),w.Sb(20,"div",11),w.Sb(21,"p-dropdown",12),w.ac("ngModelChange",(function(t){return e.currentRace=t}))("onChange",(function(t){return e.updateStats("raceForm",t)})),w.Rb(),w.Rb(),w.Sb(22,"div",11),w.Nb(23,"input",13),w.Rb(),w.zc(24,A,3,3,"div",14),w.zc(25,C,3,3,"div",14),w.Rb(),w.Rb(),w.Sb(26,"div",0),w.Nb(27,"hr",15),w.Rb(),w.Sb(28,"form",16),w.Sb(29,"div",0),w.Sb(30,"table",2),w.Sb(31,"thead"),w.Sb(32,"th",17),w.Sb(33,"span",18),w.Bc(34,"Name"),w.Rb(),w.Rb(),w.Sb(35,"th",17),w.Sb(36,"span",18),w.Bc(37," Points "),w.Sb(38,"button",19),w.ac("click",(function(){return e.resetPoints()})),w.Rb(),w.Rb(),w.Rb(),w.Sb(39,"th",17),w.Sb(40,"span",18),w.Bc(41,"Race"),w.Rb(),w.Rb(),w.Sb(42,"th",17),w.Sb(43,"span",18),w.Bc(44,"Result"),w.Rb(),w.Rb(),w.Rb(),w.Sb(45,"tbody"),w.zc(46,D,9,7,"tr",20),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb()),2&t&&(w.Bb(17),w.ic("ngIf",e.showSelectableStatDropdowns()),w.Bb(1),w.ic("ngIf",e.showSelectableStatDropdowns()),w.Bb(3),w.ic("options",e.races)("ngModel",e.currentRace)("autoDisplayFirst",!1),w.Bb(2),w.ic("value",e.availablePoints),w.Bb(1),w.ic("ngIf",e.showSelectableStatDropdowns()),w.Bb(1),w.ic("ngIf",e.showSelectableStatDropdowns()),w.Bb(21),w.ic("ngForOf",e.characterAttributes))},directives:[o.a,S.b,a.g,a.d,a.e,n.k,r.a,a.c,a.f,c.a,s.b,n.j,l.a],styles:[""]}),t})();var B=i("tyNb");const I=[{path:"",component:N}];let P=(()=>{class t{constructor(){}}return t.\u0275mod=w.Kb({type:t}),t.\u0275inj=w.Jb({factory:function(e){return new(e||t)},imports:[[n.b,a.a,o.b,r.b,c.b,s.c,l.b,b.b,B.d.forChild(I)]]}),t})()}}]);