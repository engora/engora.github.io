(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);h&&h(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e4a1e3d4"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t);var l=new Error;s=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var h=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00f2":function(t,e,a){"use strict";a("c051")},"34da":function(t,e,a){},4478:function(t,e,a){"use strict";a("c24a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Search")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"justify-center"},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-col",{attrs:{cols:"8"}},[a("v-row",{attrs:{align:"center"}},[a("v-img",{attrs:{src:"logo_bb_offset_9.0.svg","max-width":"64"}}),a("h2",[t._v("Engora Catalog Search 𝛼")]),a("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-2",attrs:{size:"26",color:"primary"}},"v-icon",n,!1),i),[t._v(" mdi-information ")])]}}])},[a("HowToText")],1)],1),a("v-row",[a("div",{staticClass:"column mt-10"})]),a("v-row",{attrs:{align:"center"}},[a("v-text-field",{staticClass:"shrink",attrs:{label:"Product"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})],1),a("v-row",[a("v-btn",{attrs:{disabled:t.isAddRequirementDisabled,elevation:"1"},on:{click:t.addRequirement}},[t._v(" Add Requirement ")])],1),a("v-row",t._l(t.requirements,(function(e,i){return a("v-list-item",{key:e.id},[a("Requirement",{attrs:{index:i,req:e},on:{remove:function(e){return t.removeRequirement(e)},typeChange:function(e){return t.setRequirementType(e)},unitChange:function(e){return t.setRequirementUnit(e)},specNameInput:function(e){return t.setRequirementSpecName(e)}}})],1)})),1),a("v-row",[a("v-btn",{staticClass:"mt-4 mb-4",attrs:{depressed:"",color:"primary",elevation:"2",disabled:!t.isSearchable,loading:t.isGettingSearchResults},on:{click:t.searchProducts}},[t._v(" Search ")])],1),a("v-row",[a("h2",[t._v("Try one of these searches:")]),a("div",{staticClass:"mt-4 mb-4"},[a("v-btn",{staticClass:"mr-4 mb-4",attrs:{elevation:"1"},on:{click:function(e){return t.setRequirementsPreset(t.presetsKeys.MOTORS)}}},[t._v("Motors by torque and speed")]),a("v-btn",{staticClass:"mr-4 mb-4",attrs:{elevation:"1"},on:{click:function(e){return t.setRequirementsPreset(t.presetsKeys.BRUSHLESS_MOTORS)}}},[t._v("Brushless motors by weight and thrust")]),a("v-btn",{staticClass:"mb-4",attrs:{elevation:"1"},on:{click:function(e){return t.setRequirementsPreset(t.presetsKeys.BATTERIES)}}},[t._v("Batteries by capacity")])],1)]),t.resultsArrived?a("v-row",[a("Results",{attrs:{results:t.results,axes:t.axes}})],1):t._e()],1)],1)],1)},c=[],o=a("3835"),l=a("2909"),u=(a("a434"),a("159b"),a("4fad"),a("d3b7"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{md:"3"}},[a("v-select",{attrs:{items:t.specTypes},on:{change:function(e){return t.typeChanged(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.getRequirementTypeIcon(i)))]),t._v(" "+t._s(i)+" ")]}},{key:"item",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.getRequirementTypeIcon(i)))]),t._v(" "+t._s(i)+" ")]}}]),model:{value:t.specType,callback:function(e){t.specType=e},expression:"specType"}})],1),a("v-col",{attrs:{md:"3"}},[a("v-text-field",{attrs:{label:"Specification Name"},on:{input:function(e){return t.specNameInput(e)}},model:{value:t.specName,callback:function(e){t.specName=e},expression:"specName"}})],1),t.shouldShowUnit?a("v-col",{attrs:{md:"3"}},[a("v-select",{attrs:{items:t.units,label:"Unit"},on:{change:function(e){return t.unitChanged(e)}},model:{value:t.specUnit,callback:function(e){t.specUnit=e},expression:"specUnit"}})],1):t._e(),a("v-col",{attrs:{"align-self":"center"}},[a("v-btn",{attrs:{icon:""},on:{click:t.remove}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1)}),h=[],p={name:"Requirement",props:["req","index"],computed:{shouldShowUnit:function(){return this.specType===this.specTypes[1]}},data:function(){return{specTypes:["category","numeric"],specType:"numeric",specUnit:"any",specName:"",units:[{text:"any",value:"any"},{text:"force",value:"force"},{text:"mass",value:"mass"},{text:"angle",value:"angle"},{text:"length",value:"length"},{text:"time",value:"time"},{text:"voltage",value:"voltage"},{text:"current",value:"current"},{text:"speed",value:"speed"},{text:"torque",value:"torque"},{text:"angular speed",value:"angular_speed"},{text:"current capacity",value:"current_capacity"},{text:"spring constant",value:"spring_constant"}],reqTypeIconMap:{CATEGORY:"shape",NUMERIC:"numeric","NON-NUMERIC":"asterisk"}}},methods:{remove:function(){this.$emit("remove",this.index)},prePopulateRequirement:function(){this.specType=this.req.type?this.req.type:this.specType,this.specName=this.req.value?this.req.value:this.specName,this.specUnit=this.req.unit?this.req.unit:this.specUnit},typeChanged:function(){this.$emit("typeChange",{index:this.index,type:this.specType})},unitChanged:function(){this.$emit("unitChange",{index:this.index,unit:this.specUnit})},specNameInput:function(){this.$emit("specNameInput",{index:this.index,value:this.specName})},getRequirementTypeIcon:function(t){return"mdi-".concat(this.reqTypeIconMap[t.toUpperCase()])}},beforeMount:function(){this.prePopulateRequirement()}},d=p,f=a("2877"),m=a("6544"),v=a.n(m),x=a("8336"),g=a("62ad"),b=a("132d"),y=a("0fd9"),S=a("b974"),A=a("8654"),C=Object(f["a"])(d,u,h,!1,null,null,null),_=C.exports;v()(C,{VBtn:x["a"],VCol:g["a"],VIcon:b["a"],VRow:y["a"],VSelect:S["a"],VTextField:A["a"]});var R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("How to use the catalog search")]),a("p",[t._v(" This cross-vendor catalog search can retrieve important information and properties you can use to find the right components and power your simulations! ")]),a("ul",[a("li",[a("strong",[t._v("Product")]),t._v(' Enter the type of product you ar looking for, such as a "motor", "stepper motor" or "battery" ')]),a("li",[a("strong",[t._v("Add Requirement")]),t._v(' Click this button to add a "requirement" on the product you are searching for. There are two types of requirements '),a("ul",[a("li",[a("strong",[t._v("Value")]),t._v(' We will extract the value of a given specification; for example, the weight or the speed of the product. You can set a unit for the value, such as "mass" or "speed". This helps us winnow out extranous data, and normalize the values we return to you. ')]),a("li",[a("strong",[t._v("Property")]),t._v(' Something that should be true of the product, for example, "brushless" ')])])]),a("li",[a("strong",[t._v("Search")]),t._v(" Click this button to search and extract the requested data from our cross-vendor catalog! ")])])])}],T=(a("eafd"),{}),q=Object(f["a"])(T,R,M,!1,null,null,null),k=q.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-2"},[a("v-row",{staticClass:"align-center"},[a("h2",{staticClass:"mr-4"},[t._v("Results")]),a("v-btn",{attrs:{"x-small":""},on:{click:t.expandAll}},[t._v(" Expand All")]),a("v-btn",{staticClass:"ml-4",attrs:{"x-small":""},on:{click:t.collapseAll}},[t._v(" Close All")]),a("v-spacer"),a("v-btn",{staticClass:"ma-2 mr-4",attrs:{small:"",outlined:"",download:"",href:t.csv},on:{click:t.downloadCSVData}},[t._v("Download CSV ")]),a("AxesManipulation",{attrs:{axes:t.axes},on:{yAxisChanged:function(e){return t.yAxisChanged(e)},xAxisChanged:function(e){return t.xAxisChanged(e)}}})],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("Filters",{attrs:{panels:t.panels,filters:t.filters},on:{panelChanged:function(e){return t.updatePanels(e)},activeRangeChanged:t.activeRangeChanged}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-card",{staticClass:"mb-4 pt-4 pb-2",attrs:{elevation:"1"}},[a("Scatterplot",{attrs:{chartId:"engora-products-scatterplot-dynamic",data:t.dynamicScatterplotData,xAxisLabel:t.xAxisLabel,yAxisLabel:t.yAxisLabel}}),a("Scatterplot",{attrs:{chartId:"engora-products-scatterplot-static",isStatic:!0,data:t.staticScatterplotData,xAxisLabel:t.xAxisLabel,yAxisLabel:t.yAxisLabel}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tableItems,"items-per-page":5,"hide-default-footer":!0,"disable-pagination":""},scopedSlots:t._u([{key:"item.name",fn:function(e){var i=e.item;return[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.absHref(i.link),target:"_blank"}},[t._v(" "+t._s(i.name)+" ")])]}},{key:"item.price",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.formatPrice(a.price))+" ")]}}])})],1)],1)],1)},O=[],w=a("b85c"),E=(a("b680"),a("caad"),a("2532"),a("5319"),a("ac1f"),a("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:t.chartId}})])}),I=[],L=(a("99af"),a("b0c0"),a("ea7f")),P=a.n(L),j={props:["chartId","isStatic","data","xAxisLabel","yAxisLabel"],data:function(){return{chartInstance:null}},methods:{renderPlot:function(){var t="#7cb5ec",e="#666666",a=this;this.chartInstance=P.a.chart(this.chartId,{chart:{type:"scatter",height:this.isStatic?150:450},tooltip:{formatter:function(){return'<b style="font-size:14px;">'.concat(this.point.name,"</b><br><div>").concat(this.x," ").concat(a.xAxisLabel,"</div><br><div>").concat(this.y," ").concat(a.yAxisLabel,"</div>")}},title:{text:null},credits:{enabled:!1},subtitle:{text:null},xAxis:{title:{enabled:!this.isStatic,text:this.isStatic?"A":this.xAxisLabel},gridLineWidth:2,gridLineDashStyle:"ShortDot",tickLength:0,lineWidth:0,lineColor:"transparent",minorGridLineWidth:0,minorTickLength:0},yAxis:{title:{text:this.isStatic?"B":this.yAxisLabel,style:{color:this.isStatic?"transparent":e}},gridLineWidth:2,gridLineDashStyle:"Dot",tickLength:0,lineWidth:0,lineColor:"transparent",minorGridLineWidth:0,minorTickLength:0},legend:{enabled:!1,layout:"vertical",align:"left",verticalAlign:"top",x:100,y:70,floating:!0,backgroundColor:P.a.defaultOptions.chart.backgroundColor,borderWidth:1},plotOptions:{scatter:{marker:{radius:5,states:{hover:{enabled:!0,lineColor:"rgb(100,100,100)"}}},states:{hover:{marker:{enabled:!1}}}}},series:[{name:"Product",color:t,data:this.data}]})},updateDynamicScatterplotData:function(){this.chartInstance.update({series:[{data:this.data}]},!0,!0)},updateStaticScatterplotData:function(){this.chartInstance.update({series:[{data:this.data}]},!0,!0)}},watch:{xAxisLabel:function(){this.chartInstance.update({series:[{data:this.data}],xAxis:{title:{text:this.xAxisLabel}}})},yAxisLabel:function(){this.chartInstance.update({series:[{data:this.data}],yAxis:{title:{text:this.yAxisLabel}}})},data:function(){this.isStatic||this.updateDynamicScatterplotData(),this.isStatic&&this.updateStaticScatterplotData()}},mounted:function(){this.renderPlot()}},V=j,F=(a("4478"),Object(f["a"])(V,E,I,!1,null,"ca6e3f68",null)),H=F.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"pt-0"},[a("v-expansion-panels",{attrs:{value:t.panels,multiple:""}},t._l(t.filters,(function(e,i){return a("v-expansion-panel",{key:i,on:{change:function(e){return t.panelChanged(i)}}},[a("v-expansion-panel-header",[a("div",{staticClass:"column"},[a("div",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(e.key))]),a("div",[a("span",{staticClass:"body-2 mr-2"},[t._v("Min: "+t._s(e.min))]),a("span",{staticClass:"body-2"},[t._v("Max: "+t._s(e.max))])])])]),a("v-expansion-panel-content",[a("FilterItem",{attrs:{filter:e},on:{activeRangeChanged:t.activeRangeChanged}})],1)],1)})),1)],1)],1)},B=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Histogram",{attrs:{chartId:t.setUniqueChartId(t.filter.key),data:t.filter,currMin:t.currMin,currMax:t.currMax}}),a("v-row",[a("v-range-slider",{attrs:{min:t.filter.min,max:t.filter.max,step:t.stepSize,value:t.range},on:{input:t.setActiveRange}})],1),a("v-row",{staticClass:"mt-0"},[a("v-col",{staticClass:"pt-0"},[a("v-text-field",{staticClass:"pt-0",attrs:{label:"Min",type:"number",rules:[function(e){return e>=t.absMin||"Min has to be at least "+t.absMin}]},on:{blur:t.updateMinRange,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateMinRange(e)}},model:{value:t.currMin,callback:function(e){t.currMin=e},expression:"currMin"}})],1),a("v-col",{staticClass:"pt-0"},[a("v-text-field",{staticClass:"pt-0",attrs:{label:"Max",type:"number",rules:[function(e){return e<=t.absMax||"Max has to be at the most "+t.absMax}]},on:{blur:t.updateMaxRange,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateMaxRange(e)}},model:{value:t.currMax,callback:function(e){t.currMax=e},expression:"currMax"}})],1)],1)],1)},N=[],W=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:t.chartId}})])}),z=[],G=a("85a8");G(P.a);var K={name:"Histogram",props:["chartId","data","currMin","currMax"],data:function(){return{chartInstance:null,chartData:[],barPoints:[]}},methods:{initHistogramData:function(){this.data&&(this.chartData=this.data.values)},renderHistogram:function(){this.chartInstance=P.a.chart(this.chartId,{chart:{height:120,animation:!1},title:{text:null},tooltip:{enabled:!1},xAxis:[{title:{text:"Data",enabled:!1},visible:!1},{title:{text:"Histogram",enabled:!1},visible:!1}],yAxis:[{title:{text:"Data",enabled:!1},visible:!1},{title:{text:"Histogram",enabled:!1},visible:!1}],plotOptions:{histogram:{accessibility:{pointDescriptionFormatter:function(t){var e=t.index+1,a=t.x.toFixed(3),i=t.x2.toFixed(3),n=t.y;return e+". "+a+" to "+i+", "+n+"."}}},scatter:{visible:!1},series:{states:{hover:{enabled:!1}}}},series:[{name:"Histogram",type:"histogram",xAxis:1,yAxis:1,baseSeries:"s1",zIndex:-1},{name:"Data",type:"scatter",data:this.chartData,id:"s1",marker:{radius:1.5}}],credits:{enabled:!1},legend:{enabled:!1}})},mapBarPoints:function(){var t=this;this.barPoints=[],this.chartInstance.series[0].points.forEach((function(e){e.barX&&t.barPoints.push(e)}))},changeBarColors:function(){var t=this,e="#7cb5ec",a="#DBE2EA";this.barPoints.forEach((function(i){var n=t.currMin<=i.category&&i.category<=t.currMax;n?i.color!==e&&i.update({color:e}):i.color!==a&&i.update({color:a})}))}},watch:{currMin:function(){this.changeBarColors()},currMax:function(){this.changeBarColors()}},mounted:function(){this.initHistogramData(),this.renderHistogram(),this.mapBarPoints()}},Y=K,J=Object(f["a"])(Y,W,z,!1,null,null,null),Q=J.exports,X={name:"ResultsFilter",components:{Histogram:Q},props:["filter"],data:function(){return{currMin:null,currMax:null,absMin:null,absMax:null,range:[],isGrabbingSlider:!1,isFinishedInitFilter:!1,stepSize:1}},methods:{setActiveRange:function(t){this.range=t,this.isFinishedInitFilter&&this.$emit("activeRangeChanged",{key:this.filter.key,activeRange:this.range})},updateMaxRange:function(){this.range=[this.range[0],parseInt(this.currMax)],this.$emit("activeRangeChanged",{key:this.filter.key,activeRange:this.range})},updateMinRange:function(){this.range=[parseInt(this.currMin),this.range[1]],this.$emit("activeRangeChanged",{key:this.filter.key,activeRange:this.range})},setUniqueChartId:function(t){var e=t.toLowerCase().replace(" ","").replace(/[^\w\s]/gi,"");return"engora-filter-".concat(e)},initAbsLimitsAndDynamicStepSize:function(){var t=1e3,e=(this.filter.max-this.filter.min)/t,a=[.5,.1],i=a[0],n=(this.filter.max-this.filter.min)/i;if(n<t)while(i>e)i=a[a.length-1],a.push(a[a.length-2]/10);else while(i<e)i=a[a.length-1],a.push(10*a[a.length-2]);var s=i,r=Math.floor(this.filter.min/s)*s;r=parseFloat(r.toFixed(10)),r>this.filter.min&&(r-=s);var c=Math.ceil(this.filter.max/s)*s;c=parseFloat(c.toFixed(10)),c<this.filter.max&&(c+=s),this.currMin=r,this.currMax=c,this.absMin=r,this.absMax=c,this.range=[r,c],this.stepSize=s}},beforeMount:function(){this.initAbsLimitsAndDynamicStepSize()},mounted:function(){this.isFinishedInitFilter=!0}},Z=X,tt=(a("00f2"),a("5963")),et=Object(f["a"])(Z,$,N,!1,null,null,null),at=et.exports;v()(et,{VCol:g["a"],VRangeSlider:tt["a"],VRow:y["a"],VTextField:A["a"]});var it={name:"Filters",props:["panels","filters"],components:{FilterItem:at},methods:{panelChanged:function(t){this.$emit("panelChanged",t)},activeRangeChanged:function(t){this.$emit("activeRangeChanged",t)}}},nt=it,st=a("a523"),rt=a("cd55"),ct=a("49e2"),ot=a("c865"),lt=a("0393"),ut=Object(f["a"])(nt,U,B,!1,null,null,null),ht=ut.exports;v()(ut,{VContainer:st["a"],VExpansionPanel:rt["a"],VExpansionPanelContent:ct["a"],VExpansionPanelHeader:ot["a"],VExpansionPanels:lt["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex"},[a("v-select",{staticClass:"mr-4",attrs:{"max-width":"50",items:t.axes,label:"Y Axis"},on:{change:function(e){return t.yAxisChanged(e)}},model:{value:t.yAxis,callback:function(e){t.yAxis=e},expression:"yAxis"}}),a("v-select",{attrs:{"max-width":"50",items:t.axes,label:"X Axis"},on:{change:function(e){return t.xAxisChanged(e)}},model:{value:t.xAxis,callback:function(e){t.xAxis=e},expression:"xAxis"}})],1)},dt=[],ft={name:"AxesManipulation",props:["axes"],data:function(){return{yAxis:"",xAxis:""}},methods:{initInputs:function(){this.axes.length>1?(this.xAxis=this.axes[0],this.yAxis=this.axes[1]):1===this.axes.length&&(this.xAxis=this.axes[0],this.yAxis=this.axes[0])},yAxisChanged:function(){this.$emit("yAxisChanged",this.yAxis)},xAxisChanged:function(){this.$emit("xAxisChanged",this.xAxis)}},beforeMount:function(){this.initInputs()}},mt=ft,vt=(a("e121"),Object(f["a"])(mt,pt,dt,!1,null,null,null)),xt=vt.exports;v()(vt,{VSelect:S["a"]});var gt={props:["results","axes"],components:{Scatterplot:H,Filters:ht,AxesManipulation:xt},data:function(){return{headers:[],tableItems:[],staticScatterplotData:[],dynamicScatterplotData:[],outsideDynamicScatterplotData:[],xAxisLabel:"",yAxisLabel:"",csv:null,panels:[],capacityKey:"capacity (As)",filters:[],currentFiltersWithActiveRanges:{}}},methods:{absHref:function(t){return"https://".concat(t)},shouldShowTextDecoration:function(t){return{"text-decoration-none":!t}},formatPrice:function(t){return"$".concat(t.toFixed(2))},formatOtherTypes:function(t){return t[0].toPrecision(3)},initFilterPanels:function(){var t=this;this.panels=[],this.axes.forEach((function(e,a){t.panels.push(a)}))},updatePanels:function(t){this.panels.includes(t)?this.panels.splice(this.panels.indexOf(t),1):this.panels.push(t)},initActiveAxes:function(){0===this.xAxisLabel.length&&0===this.yAxisLabel.length&&(this.xAxisLabel=this.axes[0],this.axes[1]?this.yAxisLabel=this.axes[1]:this.yAxisLabel=this.axes[0])},setStaticScatterplotData:function(){var t=this;this.staticScatterplotData=[],this.results.forEach((function(e,a){var i={id:a+1,x:e.values[t.xAxisLabel][0],y:e.values[t.yAxisLabel][0],name:e.product[2],isActive:!0};t.staticScatterplotData.push(i)}))},initDynamicScatterplotData:function(){var t;(t=this.dynamicScatterplotData).push.apply(t,Object(l["a"])(this.staticScatterplotData))},setDynamicScatterplotData:function(){var t=this,e="#DBE2EA",a="#7cb5ec";this.staticScatterplotData=[],this.dynamicScatterplotData=[],this.outsideDynamicScatterplotData=[],this.results.forEach((function(i,n){for(var s=[],r=0,c=Object.entries(i.values);r<c.length;r++){var l=Object(o["a"])(c[r],2),u=l[0],h=l[1],p=t.currentFiltersWithActiveRanges[u][0],d=t.currentFiltersWithActiveRanges[u][1];p<=h[0]&&h[0]<=d?s.push(1):s.push(0)}var f={id:n+1,x:i.values[t.xAxisLabel][0],y:i.values[t.yAxisLabel][0],name:i.product[2],isActive:!0,color:a};s.includes(0)?(t.outsideDynamicScatterplotData.push(f),f.isActive=!1,f.color=e,t.staticScatterplotData.push(f)):(t.dynamicScatterplotData.push(f),t.staticScatterplotData.push(f))}))},downloadCSVData:function(){var t="results.csv",e="data:text/csv;charset=utf-8,";e+='"URL","Name",';var a,i=Object(w["a"])(this.axes);try{for(i.s();!(a=i.n()).done;){var n=a.value;e+=' "'+n+'" ,'}}catch(p){i.e(p)}finally{i.f()}e+="\r\n";var s,r=Object(w["a"])(this.results);try{for(r.s();!(s=r.n()).done;){var c=s.value;e+='"https://'+c.product[1]+'","'+c.product[2].replace('"','""')+'",';var o,l=Object(w["a"])(this.axes);try{for(l.s();!(o=l.n()).done;){var u=o.value;e+=c.values[u][0]+","}}catch(p){l.e(p)}finally{l.f()}e+="\r\n"}}catch(p){r.e(p)}finally{r.f()}this.csv=encodeURI(e);var h=document.createElement("a");h.setAttribute("href",this.csv),h.setAttribute("download",t),h.click()},yAxisChanged:function(t){this.yAxisLabel=t,this.setStaticScatterplotData(),this.setDynamicScatterplotData()},xAxisChanged:function(t){this.xAxisLabel=t,this.setStaticScatterplotData(),this.setDynamicScatterplotData()},expandAll:function(){var t=this;this.panels=[],this.axes.forEach((function(e,a){t.panels.push(a)}))},collapseAll:function(){this.panels=[]},initTableHeaders:function(){var t=this;this.headers=[{text:"Name",value:"name"}],Object.keys(this.results[0].values).forEach((function(e){t.headers.push({text:e,value:e})}))},initTableItems:function(){var t=this;this.tableItems=[],this.results.forEach((function(e){for(var a={name:e.product[2],link:e.product[1]},i=0,n=Object.entries(e.values);i<n.length;i++){var s=Object(o["a"])(n[i],2),r=s[0],c=s[1];a[r]="price"!==r?c[0].toPrecision(3):c[0]}t.tableItems.push(a)}))},initFiltersByCurrentAxes:function(){var t=this;this.axes.forEach((function(e){t.filters.push({key:e,values:[]})}))},initFiltersData:function(){var t=this;this.results.forEach((function(e){for(var a=function(){var e=Object(o["a"])(n[i],2),a=e[0],s=e[1];t.filters.forEach((function(t){t.key===a&&t.values.push(s[0])}))},i=0,n=Object.entries(e.values);i<n.length;i++)a()})),this.filters.forEach((function(e){e.min=Math.min.apply(Math,Object(l["a"])(e.values)),e.max=Math.max.apply(Math,Object(l["a"])(e.values)),e.range=[e.min,e.max],t.currentFiltersWithActiveRanges[e.key]=e.range}))},updateFilters:function(t){this.currentFiltersWithActiveRanges[t.key]=t.activeRange},activeRangeChanged:function(t){this.updateFilters(t),this.setDynamicScatterplotData(t)}},beforeMount:function(){this.expandAll(),this.initTableHeaders(),this.initTableItems(),this.initFilterPanels(),this.initFiltersByCurrentAxes(),this.initFiltersData(),this.initActiveAxes(),this.setStaticScatterplotData(),this.initDynamicScatterplotData()}},bt=gt,yt=a("b0af"),St=a("8fea"),At=a("2fa4"),Ct=Object(f["a"])(bt,D,O,!1,null,null,null),_t=Ct.exports;v()(Ct,{VBtn:x["a"],VCard:yt["a"],VCol:g["a"],VDataTable:St["a"],VRow:y["a"],VSpacer:At["a"]});var Rt=a("bc3a"),Mt=a.n(Rt),Tt={name:"Search",components:{Requirement:_,HowToText:k,Results:_t},computed:{isAddRequirementDisabled:function(){return!(this.requirements.length<this.maxRequirements)},resultsArrived:function(){return this.results.length>0},isSearchable:function(){return this.searchTerm.length>0}},data:function(){return{searchTerm:"",requirements:[],queryString:[],maxRequirements:5,presetSearchTerms:{MOTORS:"motor",BRUSHLESS_MOTORS:"motor",BATTERIES:"battery"},presetsKeys:{MOTORS:"MOTORS",BRUSHLESS_MOTORS:"BRUSHLESS_MOTORS",BATTERIES:"BATTERIES"},presets:{MOTORS:[{id:1,type:"numeric",value:"speed",unit:"angular_speed"},{id:2,type:"numeric",value:"torque",unit:"torque"}],BRUSHLESS_MOTORS:[{id:3,type:"numeric",value:"weight",unit:"mass"},{id:4,type:"numeric",value:"thrust",unit:"force"},{id:5,type:"category",value:"brushless"}],BATTERIES:[{id:6,type:"numeric",value:"capacity",unit:"current_capacity"},{id:7,type:"numeric",value:"voltage",unit:"voltage"}]},results:[],activePreset:null,axes:[],isGettingSearchResults:!1}},methods:{addRequirement:function(){if(this.requirements.length<this.maxRequirements){var t=this.getUniqueID();this.requirements.push({id:t,type:"numeric",value:"",unit:"any"})}},removeRequirement:function(t){this.requirements[t]&&this.requirements.splice(t,1)},setRequirementsPreset:function(t){var e;this.presets[t]&&(this.searchTerm=this.presetSearchTerms[t],this.requirements.splice(0,this.requirements.length),this.activePreset=this.presets[t],(e=this.requirements).push.apply(e,Object(l["a"])(this.presets[t])))},setRequirementType:function(t){this.requirements[t.index].type=t.type},setRequirementUnit:function(t){this.requirements[t.index].unit=t.unit},setRequirementSpecName:function(t){this.requirements[t.index].value=t.value},setQueryString:function(){var t=this;this.queryString=[],this.requirements.forEach((function(e){var a=e.type;"numeric"===a&&(a="unit"),"category"===a&&(a="property"),t.queryString.push([a,e.value,e.unit])}))},initAxes:function(){this.axes=[];for(var t=0,e=Object.entries(this.results[0].values);t<e.length;t++){var a=Object(o["a"])(e[t],1),i=a[0];this.axes.push(i)}},handleNoResultsSearch:function(){},resetSearch:function(){this.results.splice(0,this.results.length)},searchProducts:function(){var t=this;this.isGettingSearchResults=!0,this.resetSearch(),this.setQueryString(),Mt.a.put("https://search.engora.tech/search",{product:this.searchTerm,qs:this.queryString}).then((function(e){t.isGettingSearchResults=!1,0===e.data.length&&t.handleNoResultsSearch(),e.data.length>0&&(t.results=e.data,t.initAxes())}))},getUniqueID:function(){return Math.floor(1e5*Math.random())}}},qt=Tt,kt=a("adda"),Dt=a("a722"),Ot=a("da13"),wt=a("3a2f"),Et=Object(f["a"])(qt,r,c,!1,null,null,null),It=Et.exports;v()(Et,{VBtn:x["a"],VCol:g["a"],VContainer:st["a"],VIcon:b["a"],VImg:kt["a"],VLayout:Dt["a"],VListItem:Ot["a"],VRow:y["a"],VTextField:A["a"],VTooltip:wt["a"]});var Lt={name:"App",components:{Search:It},data:function(){return{}}},Pt=Lt,jt=a("7496"),Vt=a("f6c4"),Ft=Object(f["a"])(Pt,n,s,!1,null,null,null),Ht=Ft.exports;v()(Ft,{VApp:jt["a"],VMain:Vt["a"]});a("3ca3");var Ut=a("8c4f"),Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},$t=[],Nt={name:"Home",components:{HelloWorld:It}},Wt=Nt,zt=Object(f["a"])(Wt,Bt,$t,!1,null,null,null),Gt=zt.exports;i["a"].use(Ut["a"]);var Kt=[{path:"/",name:"Home",component:Gt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Yt=new Ut["a"]({mode:"history",base:"/",routes:Kt}),Jt=Yt,Qt=a("f309");i["a"].use(Qt["a"]);var Xt=new Qt["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:Jt,vuetify:Xt,render:function(t){return t(Ht)}}).$mount("#app")},a36c:function(t,e,a){},c051:function(t,e,a){},c24a:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e121:function(t,e,a){"use strict";a("a36c")},eafd:function(t,e,a){"use strict";a("34da")}});
//# sourceMappingURL=app.faf623a3.js.map