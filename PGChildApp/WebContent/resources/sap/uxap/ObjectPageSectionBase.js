/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","./library"],function(q,C,l){"use strict";var O=C.extend("sap.uxap.ObjectPageSectionBase",{metadata:{"abstract":true,library:"sap.uxap",properties:{title:{type:"string",group:"Appearance",defaultValue:null},visible:{type:"boolean",group:"Appearance",defaultValue:true},importance:{type:"sap.uxap.Importance",group:"Behavior",defaultValue:l.Importance.High}},aggregations:{customAnchorBarButton:{type:"sap.m.Button",multiple:false}}}});O.prototype.init=function(){this._bInternalVisible=true;this._bInternalTitleVisible=true;this._sInternalTitle="";this._isHidden=false;this._oParentObjectPageLayout=undefined;};O.prototype.onAfterRendering=function(){if(this._getObjectPageLayout()){this._getObjectPageLayout()._adjustLayout();this._getObjectPageLayout()._setSectionsFocusValues();}};O.prototype._setInternalVisible=function(v,i){if(v!=this._bInternalVisible){this._bInternalVisible=v;if(i){this.invalidate();}}};O.prototype._getInternalVisible=function(){return this._bInternalVisible;};O.prototype._setInternalTitleVisible=function(v,i){if(v!=this._bInternalTitleVisible){this._bInternalTitleVisible=v;if(i){this.invalidate();}}};O.prototype._getInternalTitleVisible=function(){return this._bInternalTitleVisible;};O.prototype._setInternalTitle=function(v,i){if(v!=this._sInternalTitle){this._sInternalTitle=v;if(i){this.invalidate();}}};O.prototype._getInternalTitle=function(){return this._sInternalTitle;};O.prototype._getObjectPageLayout=function(){if(!this._oParentObjectPageLayout){this._oParentObjectPageLayout=l.Utilities.getClosestOPL(this);}return this._oParentObjectPageLayout;};O.prototype._notifyObjectPageLayout=function(){if(this.$().length&&this._getObjectPageLayout()){this._getObjectPageLayout()._adjustLayoutAndUxRules();}};["addAggregation","insertAggregation","removeAllAggregation","removeAggregation","destroyAggregation"].forEach(function(m){O.prototype[m]=function(){var r=C.prototype[m].apply(this,arguments);this._notifyObjectPageLayout();return r;};});O.prototype.setVisible=function(v,s){if(!this._getObjectPageLayout()){return this.setProperty("visible",v,s);}this.setProperty("visible",v,true);this._getObjectPageLayout()._adjustLayoutAndUxRules();this.invalidate();return this;};O.prototype.setTitle=function(v,s){this.setProperty("title",v,s);this._notifyObjectPageLayout();return this;};O.prototype._shouldBeHidden=function(){return O._importanceMap[this.getImportance()]>O._importanceMap[this._sCurrentLowestImportanceLevelToShow];};O._importanceMap={"Low":3,"Medium":2,"High":1};O.prototype._updateShowHideState=function(h){var o=this._getObjectPageLayout();this._isHidden=h;this.$().children(this._sContainerSelector).toggle(!h);if(o){o._adjustLayout();}return this;};O.prototype._getIsHidden=function(){return this._isHidden;};O.prototype._expandSection=function(){return this._updateShowHideState(false);};O.prototype._showHideContent=function(){return this._updateShowHideState(!this._getIsHidden());};O.prototype._applyImportanceRules=function(c){this._sCurrentLowestImportanceLevelToShow=c;if(this.getDomRef()){this._updateShowHideState(this._shouldBeHidden());}else{this._isHidden=this._shouldBeHidden();}};O.PAGEUP_AND_PAGEDOWN_JUMP_SIZE=5;O.prototype.onkeydown=function(e){if(e.keyCode===q.sap.KeyCodes.F7){var s=this.getSubSections(),f=s[0],L;if(s.length===1){L=f._oLastFocusedControlF7;if(L){L.$().focus();}else{f.$().firstFocusableDomRef().focus();}}else{if(f.getActions().length){f.getActions()[0].$().focus();}}}};O.prototype.onsapdown=function(e){this._handleFocusing(e,e.currentTarget.nextSibling);};O.prototype._handleFocusing=function(e,E){if(this._targetIsCorrect(e)&&E){e.preventDefault();E.focus();this._scrollParent(q(E).attr("id"));}};O.prototype._targetIsCorrect=function(e){return e.srcControl===this;};O.prototype.onsapright=O.prototype.onsapdown;O.prototype.onsapup=function(e){this._handleFocusing(e,e.currentTarget.previousSibling);};O.prototype.onsapleft=O.prototype.onsapup;O.prototype.onsaphome=function(e){this._handleFocusing(e,e.currentTarget.parentElement.firstChild);};O.prototype.onsapend=function(e){this._handleFocusing(e,e.currentTarget.parentElement.lastChild);};O.prototype.onsappageup=function(e){if(!this._targetIsCorrect(e)){return;}e.preventDefault();var n;var s=q(e.currentTarget).parent().children();var f;s.each(function(S,o){if(q(o).attr("id")===e.currentTarget.id){n=S-(O.PAGEUP_AND_PAGEDOWN_JUMP_SIZE+1);return;}});if(n&&s[n]){s[n].focus();f=q(s[n]).attr("id");}else if(s[0]){s[0].focus();f=q(s[0]).attr("id");}this._scrollParent(f);};O.prototype.onsappagedown=function(e){if(!this._targetIsCorrect(e)){return;}e.preventDefault();var n;var s=q(e.currentTarget).parent().children();var f;s.each(function(S,o){if(q(o).attr("id")===e.currentTarget.id){n=S+O.PAGEUP_AND_PAGEDOWN_JUMP_SIZE+1;return;}});if(n&&s[n]){s[n].focus();f=q(s[n]).attr("id");}else if(s[s.length-1]){s[s.length-1].focus();f=q(s[s.length-1]).attr("id");}this._scrollParent(f);};O.prototype._scrollParent=function(i){if(this._getObjectPageLayout()){this._getObjectPageLayout().scrollToSection(i,0,10);}};return O;});
