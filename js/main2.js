var _$_ad8d=["touchmove","preventDefault","addEventListener","body","DOMContentLoaded","attach","menuButton","getElementById","sideBar","mask","loading","onclick","open","toggle","classList","show","remove","ten-drop.wilddog.com","https://ten-drop.wilddogio.com","initializeApp","ref","sync","user","child","userImg","levelRank","userName","canvas","2d","getContext","width","height","leftDrop","NONE","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","push","info","restartBtn","level","bestLevel","todayBest","best","loadBg","x","y","generation","direction","colorArr","#43A6FF","#1BD369","#FF7575","prototype","chooseDraw","color","draw_1","draw_2","draw_3","draw_4","draw_5","left","add_broken","dropCollection","right","up","down","save","fillStyle","scale","beginPath","moveTo","PI","arc","closePath","fill","restore","w","h","hor","ver","boardArr","lineTo","stroke","dropArr","brokenArr","clearRect","length","process","splice","isInto","board","floor","gameStart","pause","startTime","endTime","name","init","add","innerHTML","timeChange","clickSelect","getTime","isGameOver","Game over!","offsetX","offsetY","You win! Try your best to go to next level!","nextLevel","You lose!","fly","Level ","hide","setBest","today","Try your best! Give you another "," drop!","\u6b63\u5728\u4e0a\u4f20\u4f60\u7684\u6700\u9ad8\u7eaa\u5f55\u4e2d...","","0","round","userAgent","\u5929 ","\u5c0f\u65f6 "," \u5206\u949f"," \u79d2","src","encrypt","_","update","random","reset","code","response","avatar_url","href","https://bupt-hjm.github.io/ten-drop/","GET","users/profile","user_id","data","ajax","API","on","visitor","value","val","set","toDateString","playTime","rank","UA","time","t","token","once","img","unshift","log","forEach","<p><span class='user-rank'>","</span><img src=","><span class='user-rank-name'>","</span><span class='user-level'>level ","</span></p>","limitToLast","orderByChild","todayRank","switch","rankTitle","\u4eca\u65e5\u5b9e\u65f6\u6392\u884c\u699c","\u5386\u53f2\u6392\u884c\u699c","\u4eca\u65e5","\u5386\u53f2"];document[_$_ad8d[3]][_$_ad8d[2]](_$_ad8d[0],function(a){a[_$_ad8d[1]]()},false);if(_$_ad8d[2] in  document){document[_$_ad8d[2]](_$_ad8d[4],function(){FastClick[_$_ad8d[5]](document[_$_ad8d[3]])},false)};var menuButton=document[_$_ad8d[7]](_$_ad8d[6]);var sideBar=document[_$_ad8d[7]](_$_ad8d[8]);var mask=document[_$_ad8d[7]](_$_ad8d[9]);var loading=document[_$_ad8d[7]](_$_ad8d[10]);menuButton[_$_ad8d[11]]= function(){sideBar[_$_ad8d[14]][_$_ad8d[13]](_$_ad8d[12]);mask[_$_ad8d[14]][_$_ad8d[13]](_$_ad8d[15])};mask[_$_ad8d[11]]= function(){sideBar[_$_ad8d[14]][_$_ad8d[16]](_$_ad8d[12]);mask[_$_ad8d[14]][_$_ad8d[16]](_$_ad8d[15])};var pastPlayTime;var todayPlayTime= new Date();var userData;var config={authDomain:_$_ad8d[17],syncURL:_$_ad8d[18]};var defApp=wilddog[_$_ad8d[19]](config);var ref=wilddog[_$_ad8d[21]]()[_$_ad8d[20]]();var user_ref=ref[_$_ad8d[23]](_$_ad8d[22]);var userImg=document[_$_ad8d[7]](_$_ad8d[24]);var levelRank=document[_$_ad8d[7]](_$_ad8d[25]);var userNameP=document[_$_ad8d[7]](_$_ad8d[26]);var canvas=document[_$_ad8d[7]](_$_ad8d[27]);var ctx=canvas[_$_ad8d[29]](_$_ad8d[28]);canvas[_$_ad8d[30]]= 600;canvas[_$_ad8d[31]]= 600;var w=canvas[_$_ad8d[30]];var h=canvas[_$_ad8d[31]];var leftDropNum=10;var leftDropSpan=document[_$_ad8d[7]](_$_ad8d[32]);var leftDropArr=[_$_ad8d[33],_$_ad8d[34],_$_ad8d[35],_$_ad8d[36],_$_ad8d[37],_$_ad8d[38],_$_ad8d[39],_$_ad8d[40],_$_ad8d[41],_$_ad8d[42],_$_ad8d[43]];for(var i=11;i< 100;i++){leftDropArr[_$_ad8d[44]](i)};var infoP=document[_$_ad8d[7]](_$_ad8d[45]);var restartBtn=document[_$_ad8d[7]](_$_ad8d[46]);var levelP=document[_$_ad8d[7]](_$_ad8d[47]);var bestLevel=document[_$_ad8d[7]](_$_ad8d[48]);var todayBest=document[_$_ad8d[7]](_$_ad8d[49]);var best=document[_$_ad8d[7]](_$_ad8d[50]);var loadBg=document[_$_ad8d[7]](_$_ad8d[51]);var game=null;var Drop=function(){this[_$_ad8d[52]]= w/ 2;this[_$_ad8d[53]]= h/ 2;this[_$_ad8d[54]]= 1;this[_$_ad8d[55]]= null;this[_$_ad8d[56]]= [_$_ad8d[57],_$_ad8d[58],_$_ad8d[59]]};Drop[_$_ad8d[60]]= {process:function(){this[_$_ad8d[61]]()},chooseDraw:function(){var b=(game[_$_ad8d[47]]- 1)% 3;this[_$_ad8d[62]]= this[_$_ad8d[56]][b];switch(this[_$_ad8d[54]]){case 1:this[_$_ad8d[63]]();break;case 2:this[_$_ad8d[64]]();break;case 3:this[_$_ad8d[65]]();break;case 4:this[_$_ad8d[66]]();break;case 5:this[_$_ad8d[67]]();break;default:break}},draw_1:function(){EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],15,20,this[_$_ad8d[62]])},draw_2:function(){EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],30,30,this[_$_ad8d[62]])},draw_3:function(){EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],45,35,this[_$_ad8d[62]])},draw_4:function(){EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],50,50,this[_$_ad8d[62]])},draw_5:function(){var c=this[_$_ad8d[52]];var d=this[_$_ad8d[53]];if(this[_$_ad8d[55]]== null){this[_$_ad8d[54]]= 6;EvenCompEllipse(ctx,this[_$_ad8d[52]]- 20,this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]]+ 20,this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]]- 20,10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]]+ 20,10,10,this[_$_ad8d[62]])}else {EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);EvenCompEllipse(ctx,this[_$_ad8d[52]],this[_$_ad8d[53]],10,10,this[_$_ad8d[62]]);return};var f= new Drop();f[_$_ad8d[52]]= c- 20;f[_$_ad8d[53]]= d;f[_$_ad8d[54]]= 5;f[_$_ad8d[55]]= _$_ad8d[68];game[_$_ad8d[70]][_$_ad8d[69]](f);var g= new Drop();g[_$_ad8d[52]]= c+ 20;g[_$_ad8d[53]]= d;g[_$_ad8d[54]]= 5;g[_$_ad8d[55]]= _$_ad8d[71];game[_$_ad8d[70]][_$_ad8d[69]](g);var j= new Drop();j[_$_ad8d[52]]= c;j[_$_ad8d[53]]= d+ 20;j[_$_ad8d[54]]= 5;j[_$_ad8d[55]]= _$_ad8d[72];game[_$_ad8d[70]][_$_ad8d[69]](j);var e= new Drop();e[_$_ad8d[52]]= c;e[_$_ad8d[53]]= d- 20;e[_$_ad8d[54]]= 5;e[_$_ad8d[55]]= _$_ad8d[73];game[_$_ad8d[70]][_$_ad8d[69]](e)}};function EvenCompEllipse(T,m,n,R,S,U){T[_$_ad8d[74]]();T[_$_ad8d[75]]= U;var V=(R> S)?R:S;var W=R/ V;var X=S/ V;T[_$_ad8d[76]](W,X);T[_$_ad8d[77]]();T[_$_ad8d[78]]((m+ R)/ W,n/ X);T[_$_ad8d[80]](m/ W,n/ X,V,0,2* Math[_$_ad8d[79]]);T[_$_ad8d[81]]();T[_$_ad8d[82]]();T[_$_ad8d[83]]()}var Board=function(){this[_$_ad8d[84]]= canvas[_$_ad8d[30]];this[_$_ad8d[85]]= canvas[_$_ad8d[31]];this[_$_ad8d[86]]= 6;this[_$_ad8d[87]]= 6;this[_$_ad8d[88]]= []};Board[_$_ad8d[60]]= {init:function(){for(var i=0;i< this[_$_ad8d[86]];i++){for(var k=0;k< this[_$_ad8d[87]];k++){var m=i* this[_$_ad8d[84]]/ this[_$_ad8d[86]]+ this[_$_ad8d[84]]/ this[_$_ad8d[86]]/ 2;var n=k* this[_$_ad8d[85]]/ this[_$_ad8d[87]]+ this[_$_ad8d[85]]/ this[_$_ad8d[87]]/ 2;var l={x:m,y:n};this[_$_ad8d[88]][_$_ad8d[44]](l)}}},draw:function(){for(var i=0;i<= this[_$_ad8d[86]];i++){ctx[_$_ad8d[74]]();ctx[_$_ad8d[77]]();ctx[_$_ad8d[78]](i* this[_$_ad8d[84]]/ this[_$_ad8d[86]],0);ctx[_$_ad8d[89]](i* this[_$_ad8d[84]]/ this[_$_ad8d[86]],this[_$_ad8d[85]]);ctx[_$_ad8d[81]]();ctx[_$_ad8d[90]]();ctx[_$_ad8d[83]]()};for(var i=0;i<= this[_$_ad8d[87]];i++){ctx[_$_ad8d[74]]();ctx[_$_ad8d[77]]();ctx[_$_ad8d[78]](0,i* this[_$_ad8d[85]]/ this[_$_ad8d[87]]);ctx[_$_ad8d[89]](this[_$_ad8d[84]],i* this[_$_ad8d[85]]/ this[_$_ad8d[87]]);ctx[_$_ad8d[81]]();ctx[_$_ad8d[90]]();ctx[_$_ad8d[83]]()}}};var DropCollection=function(){this[_$_ad8d[91]]= [];this[_$_ad8d[92]]= []};DropCollection[_$_ad8d[60]]= {process:function(){ctx[_$_ad8d[93]](0,0,canvas[_$_ad8d[30]],canvas[_$_ad8d[31]]);for(var i=0;i< this[_$_ad8d[91]][_$_ad8d[94]];i++){if(this[_$_ad8d[91]][i][_$_ad8d[54]]== 6){continue};this[_$_ad8d[91]][i][_$_ad8d[95]]()};for(var i=0;i< this[_$_ad8d[92]][_$_ad8d[94]];i++){if(this[_$_ad8d[92]][i][_$_ad8d[54]]== 6){continue};this[_$_ad8d[92]][i][_$_ad8d[95]]()}},add:function(o){this[_$_ad8d[91]][_$_ad8d[44]](o)},remove:function(o){for(var i=0;i< this[_$_ad8d[91]][_$_ad8d[94]];i++){if(this[_$_ad8d[91]][i]== o){this[_$_ad8d[91]][_$_ad8d[96]](i,1)}}},add_broken:function(o){this[_$_ad8d[92]][_$_ad8d[44]](o)},remove_broken:function(o){for(var i=0;i< this[_$_ad8d[92]][_$_ad8d[94]];i++){if(this[_$_ad8d[92]][i]== o){this[_$_ad8d[92]][_$_ad8d[96]](i,1)}}},fly:function(o){for(var i=0;i< this[_$_ad8d[92]][_$_ad8d[94]];i++){if(this[_$_ad8d[92]][i][_$_ad8d[54]]== 6){continue};if(this[_$_ad8d[97]](this[_$_ad8d[92]][i][_$_ad8d[52]],this[_$_ad8d[92]][i][_$_ad8d[53]])|| this[_$_ad8d[92]][i][_$_ad8d[52]]< -5|| this[_$_ad8d[92]][i][_$_ad8d[52]]> canvas[_$_ad8d[30]]+ 5|| this[_$_ad8d[92]][i][_$_ad8d[53]]> canvas[_$_ad8d[31]]+ 5|| this[_$_ad8d[92]][i][_$_ad8d[53]]<  -5){this[_$_ad8d[92]][i][_$_ad8d[54]]= 6;continue};switch(this[_$_ad8d[92]][i][_$_ad8d[55]]){case _$_ad8d[68]:this[_$_ad8d[92]][i][_$_ad8d[52]]--;break;case _$_ad8d[71]:this[_$_ad8d[92]][i][_$_ad8d[52]]++;break;case _$_ad8d[72]:this[_$_ad8d[92]][i][_$_ad8d[53]]++;break;case _$_ad8d[73]:this[_$_ad8d[92]][i][_$_ad8d[53]]--;break;default:break}}},isInto:function(m,n){var p=game[_$_ad8d[98]];var q=game[_$_ad8d[70]][_$_ad8d[91]];var i=Math[_$_ad8d[99]](m/ (p[_$_ad8d[84]]/ p[_$_ad8d[86]]));var k=Math[_$_ad8d[99]](n/ (p[_$_ad8d[85]]/ p[_$_ad8d[87]]));for(var r=0;r< q[_$_ad8d[94]];r++){if((q[r][_$_ad8d[52]]== (i* p[_$_ad8d[84]]/ p[_$_ad8d[86]]+ p[_$_ad8d[84]]/ p[_$_ad8d[86]]/ 2))&& (q[r][_$_ad8d[53]]== (k* p[_$_ad8d[85]]/ p[_$_ad8d[87]]+ p[_$_ad8d[85]]/ p[_$_ad8d[87]]/ 2))&& (q[r][_$_ad8d[54]]<= 4)){q[r][_$_ad8d[54]]++;if(q[r][_$_ad8d[54]]> 6){q[r][_$_ad8d[54]]= 6};return true}};return false}};var Game=function(){this[_$_ad8d[98]]= null;this[_$_ad8d[70]]= null;this[_$_ad8d[100]]= false;this[_$_ad8d[47]]= 1;this[_$_ad8d[101]]= false;this[_$_ad8d[102]]= 0;this[_$_ad8d[103]]= 0;this[_$_ad8d[104]]= null};Game[_$_ad8d[60]]= {init:function(){ctx[_$_ad8d[93]](0,0,canvas[_$_ad8d[30]],canvas[_$_ad8d[31]]);var p= new Board();p[_$_ad8d[105]]();this[_$_ad8d[98]]= p;var s= new DropCollection();for(var i=0;i< p[_$_ad8d[88]][_$_ad8d[94]];i++){var o= new Drop();o[_$_ad8d[54]]= getNumberInRange(1,4);o[_$_ad8d[52]]= p[_$_ad8d[88]][i][_$_ad8d[52]];o[_$_ad8d[53]]= p[_$_ad8d[88]][i][_$_ad8d[53]];s[_$_ad8d[106]](o)};leftDropSpan[_$_ad8d[107]]= leftDropArr[10];this[_$_ad8d[108]]();this[_$_ad8d[70]]= s;this[_$_ad8d[109]]();this[_$_ad8d[102]]=  new Date()[_$_ad8d[110]]()},clickSelect:function(){var t=this;var p=this[_$_ad8d[98]];canvas[_$_ad8d[11]]= function(u){u[_$_ad8d[1]]();if(this[_$_ad8d[101]]){return};if(leftDropNum== 0|| t[_$_ad8d[111]]()){alert(_$_ad8d[112]);return};t[_$_ad8d[100]]= true;var i=Math[_$_ad8d[99]](u[_$_ad8d[113]]/ (p[_$_ad8d[84]]/ p[_$_ad8d[86]]));var k=Math[_$_ad8d[99]](u[_$_ad8d[114]]/ (p[_$_ad8d[85]]/ p[_$_ad8d[87]]));var q=t[_$_ad8d[70]][_$_ad8d[91]];for(var r=0;r< q[_$_ad8d[94]];r++){if((q[r][_$_ad8d[52]]== (i* p[_$_ad8d[84]]/ p[_$_ad8d[86]]+ p[_$_ad8d[84]]/ p[_$_ad8d[86]]/ 2))&& (q[r][_$_ad8d[53]]== (k* p[_$_ad8d[85]]/ p[_$_ad8d[87]]+ p[_$_ad8d[85]]/ p[_$_ad8d[87]]/ 2))){if(q[r][_$_ad8d[54]]>= 5){continue};q[r][_$_ad8d[54]]++;leftDropNum--;leftDropSpan[_$_ad8d[107]]= leftDropArr[leftDropNum];t[_$_ad8d[70]][_$_ad8d[95]]()}}}},timeChange:function(){var t=this;if(this[_$_ad8d[100]]&& this[_$_ad8d[111]]()&& !this[_$_ad8d[101]]){info[_$_ad8d[107]]= _$_ad8d[115];this[_$_ad8d[101]]= true;setTimeout(function(){t[_$_ad8d[116]]();t[_$_ad8d[101]]= false},1000)};if(leftDropNum== 0&& !this[_$_ad8d[111]]()){info[_$_ad8d[107]]= _$_ad8d[117]};var t=this;setTimeout(function(){t[_$_ad8d[70]][_$_ad8d[118]]();t[_$_ad8d[70]][_$_ad8d[95]]();t[_$_ad8d[108]]()},4)},isGameOver:function(){var v=0;var q=this[_$_ad8d[70]][_$_ad8d[91]];for(var r=0;r< q[_$_ad8d[94]];r++){if(q[r][_$_ad8d[54]]== 6){v++}};if(v== q[_$_ad8d[94]]){return true}else {return false}},nextLevel:function(){this[_$_ad8d[47]]++;levelP[_$_ad8d[107]]= _$_ad8d[119]+ this[_$_ad8d[47]];if(this[_$_ad8d[47]]> +bestLevel[_$_ad8d[107]]){loadBg[_$_ad8d[14]][_$_ad8d[16]](_$_ad8d[120]);this[_$_ad8d[121]](this[_$_ad8d[47]])};if(this[_$_ad8d[47]]> +todayBest[_$_ad8d[107]]){this[_$_ad8d[121]](this[_$_ad8d[47]],_$_ad8d[122])};ctx[_$_ad8d[93]](0,0,canvas[_$_ad8d[30]],canvas[_$_ad8d[31]]);this[_$_ad8d[100]]= false;this[_$_ad8d[70]]= null;var p=this[_$_ad8d[98]];var s= new DropCollection();var v=0;for(var i=0;i< p[_$_ad8d[88]][_$_ad8d[94]];i++){var o= new Drop();o[_$_ad8d[54]]= getNumberInRange(1,4);v+= o[_$_ad8d[54]];o[_$_ad8d[52]]= p[_$_ad8d[88]][i][_$_ad8d[52]];o[_$_ad8d[53]]= p[_$_ad8d[88]][i][_$_ad8d[53]];s[_$_ad8d[106]](o)};var z;if(leftDropNum+ 7<= 20){z= 7}else {z= 20- leftDropNum};leftDropNum+= z;leftDropSpan[_$_ad8d[107]]= leftDropArr[leftDropNum];info[_$_ad8d[107]]= _$_ad8d[123]+ z+ _$_ad8d[124];this[_$_ad8d[70]]= s},setBest:function(I,B){loadBg[_$_ad8d[14]][_$_ad8d[16]](_$_ad8d[120]);loading[_$_ad8d[107]]= _$_ad8d[125];var N=userData[_$_ad8d[104]]+ _$_ad8d[126];var H=I+ _$_ad8d[126];var G=H[_$_ad8d[94]];for(var i=0;i< 6- G;i++){H= _$_ad8d[127]+ H};var K= new Date()+ _$_ad8d[126];this[_$_ad8d[103]]=  new Date()[_$_ad8d[110]]();var M=this[_$_ad8d[103]]- this[_$_ad8d[102]];var A=Math[_$_ad8d[99]](M/ (24* 3600* 1000));var D=M% (24* 3600* 1000);var C=Math[_$_ad8d[99]](D/ (3600* 1000));var E=D% (3600* 1000);var J=Math[_$_ad8d[99]](E/ (60* 1000));var F=E% (60* 1000);var L=Math[_$_ad8d[128]](F/ 1000);if(B== _$_ad8d[122]){user_ref[_$_ad8d[23]](N)[_$_ad8d[23]](_$_ad8d[122])[_$_ad8d[137]]({level:I,UA:navigator[_$_ad8d[129]],time:A+ _$_ad8d[130]+ C+ _$_ad8d[131]+ J+ _$_ad8d[132]+ L+ _$_ad8d[133],img:userImg[_$_ad8d[134]],t:M,token:sjcl[_$_ad8d[135]](M+ _$_ad8d[126],I+ _$_ad8d[126]),rank:H+ _$_ad8d[136]+ (3000000000000- M),playTime:K+ _$_ad8d[126]});user_ref[_$_ad8d[23]](N)[_$_ad8d[137]]({todayRank:H+ _$_ad8d[136]+ (3000000000000- M)});todayBest[_$_ad8d[107]]= I;return};user_ref[_$_ad8d[23]](N)[_$_ad8d[137]]({level:I,UA:navigator[_$_ad8d[129]],time:A+ _$_ad8d[130]+ C+ _$_ad8d[131]+ J+ _$_ad8d[132]+ L+ _$_ad8d[133],t:M,token:sjcl[_$_ad8d[135]](M+ _$_ad8d[126],I+ _$_ad8d[126]),rank:H+ _$_ad8d[136]+ (3000000000000- M),playTime:K+ _$_ad8d[126],todayRank:H+ _$_ad8d[136]+ (3000000000000- M)});bestLevel[_$_ad8d[107]]= I;loadBg[_$_ad8d[14]][_$_ad8d[106]](_$_ad8d[120])}};restartBtn[_$_ad8d[11]]= function(){for(var i=0;i< 99999;i++){clearTimeout(i)};game= null;leftDropNum= 10;game=  new Game();game[_$_ad8d[105]]()};function getNumberInRange(Z,Y){var ba=Y- Z;var V=Math[_$_ad8d[138]]();return Math[_$_ad8d[128]](V* ba+ Z)}DUOSHUO[_$_ad8d[152]][_$_ad8d[151]](_$_ad8d[139],function(){var P=function(Q){if(Q[_$_ad8d[140]]== 0){userData= Q[_$_ad8d[141]];userImg[_$_ad8d[134]]= userData[_$_ad8d[142]];userNameP[_$_ad8d[107]]= userData[_$_ad8d[104]];game=  new Game();game[_$_ad8d[105]]();userBest();getRank();getTodayRank()}else {location[_$_ad8d[143]]= _$_ad8d[144]}};var O=function(Q){location[_$_ad8d[143]]= _$_ad8d[144]};DUOSHUO[_$_ad8d[150]][_$_ad8d[149]](_$_ad8d[145],_$_ad8d[146],{"user_id":this[_$_ad8d[148]][_$_ad8d[147]]},P,O)});function userBest(){user_ref[_$_ad8d[163]](_$_ad8d[153],function(bf){var N=userData[_$_ad8d[104]]+ _$_ad8d[126];var bf=bf[_$_ad8d[154]]();var K= new Date()+ _$_ad8d[126];if(bf[N]== undefined){bestLevel[_$_ad8d[107]]= 1;todayBest[_$_ad8d[107]]= 1;user_ref[_$_ad8d[23]](N)[_$_ad8d[155]]({name:N,level:1,UA:navigator[_$_ad8d[129]],time:0,t:0,img:userImg[_$_ad8d[134]],token:sjcl[_$_ad8d[135]](0+ _$_ad8d[126],1+ _$_ad8d[126]),rank:0,playTime:K+ _$_ad8d[126],id:userData[_$_ad8d[147]],today:1,todayRank:0})}else {bestLevel[_$_ad8d[107]]= bf[N][_$_ad8d[47]];if(user_ref[_$_ad8d[23]](N)[_$_ad8d[122]]== 1){user_ref[_$_ad8d[23]](N)[_$_ad8d[23]](_$_ad8d[122])[_$_ad8d[155]]({level:1,UA:navigator[_$_ad8d[129]],time:0,t:0,token:sjcl[_$_ad8d[135]](0+ _$_ad8d[126],1+ _$_ad8d[126]),rank:0,playTime:K+ _$_ad8d[126]})}else {if((bf[N][_$_ad8d[122]]== undefined)&& ( new Date(bf[N][_$_ad8d[157]])[_$_ad8d[156]]()==  new Date(todayPlayTime)[_$_ad8d[156]]())){user_ref[_$_ad8d[23]](N)[_$_ad8d[137]]({todayRank:bf[N][_$_ad8d[158]]});user_ref[_$_ad8d[23]](N)[_$_ad8d[23]](_$_ad8d[122])[_$_ad8d[155]]({level:bf[N][_$_ad8d[47]],UA:bf[N][_$_ad8d[159]],time:bf[N][_$_ad8d[160]],t:bf[N][_$_ad8d[161]],token:bf[N][_$_ad8d[162]],rank:bf[N][_$_ad8d[158]],playTime:bf[N][_$_ad8d[157]]});todayBest[_$_ad8d[107]]= bf[N][_$_ad8d[122]][_$_ad8d[47]];return};if(bf[N][_$_ad8d[122]]== undefined){user_ref[_$_ad8d[23]](N)[_$_ad8d[155]]({level:bf[N][_$_ad8d[47]],UA:bf[N][_$_ad8d[159]],time:bf[N][_$_ad8d[160]],t:bf[N][_$_ad8d[161]],token:bf[N][_$_ad8d[162]],rank:bf[N][_$_ad8d[158]],playTime:bf[N][_$_ad8d[157]],todayRank:1});user_ref[_$_ad8d[23]](N)[_$_ad8d[23]](_$_ad8d[122])[_$_ad8d[155]]({level:1,UA:navigator[_$_ad8d[129]],time:0,t:0,token:sjcl[_$_ad8d[135]](0+ _$_ad8d[126],1+ _$_ad8d[126]),rank:0,playTime:K+ _$_ad8d[126]});return};pastPlayTime= bf[N][_$_ad8d[122]][_$_ad8d[157]];if( new Date(pastPlayTime)[_$_ad8d[156]]()!==  new Date(todayPlayTime)[_$_ad8d[156]]()){user_ref[_$_ad8d[23]](N)[_$_ad8d[23]](_$_ad8d[122])[_$_ad8d[137]]({level:1,UA:navigator[_$_ad8d[129]],time:0,t:0,token:sjcl[_$_ad8d[135]](0+ _$_ad8d[126],1+ _$_ad8d[126]),rank:0,playTime:K+ _$_ad8d[126]})}};todayBest[_$_ad8d[107]]= bf[N][_$_ad8d[122]][_$_ad8d[47]]}})}var todayRankHtml=_$_ad8d[126];var pastRankHtml=_$_ad8d[126];function getRank(){user_ref[_$_ad8d[174]](_$_ad8d[158])[_$_ad8d[173]](8)[_$_ad8d[151]](_$_ad8d[153],function(bd){var bc=[];var bb=8;bd[_$_ad8d[167]](function(bf){var be=bf[_$_ad8d[154]]();try{bc[_$_ad8d[165]]({img:be[_$_ad8d[164]],name:be[_$_ad8d[104]],level:be[_$_ad8d[47]]})}catch(err){console[_$_ad8d[166]](err)}});if(bc[_$_ad8d[94]]< 8){bb= bc[_$_ad8d[94]]};pastRankHtml= _$_ad8d[126];for(var i=0;i< bb;i++){pastRankHtml+= _$_ad8d[168]+ (i+ 1)+ _$_ad8d[169]+ bc[i][_$_ad8d[164]]+ _$_ad8d[170]+ bc[i][_$_ad8d[104]]+ _$_ad8d[171]+ bc[i][_$_ad8d[47]]+ _$_ad8d[172]}})}function getTodayRank(){user_ref[_$_ad8d[174]](_$_ad8d[175])[_$_ad8d[173]](100)[_$_ad8d[151]](_$_ad8d[153],function(bd){todayPlayTime=  new Date()+ _$_ad8d[126];var bc=[];var bb=8;var r=0;bd[_$_ad8d[167]](function(bf){var be=bf[_$_ad8d[154]]();try{if(be[_$_ad8d[157]]!== undefined){if( new Date(be[_$_ad8d[157]])[_$_ad8d[156]]()==  new Date(todayPlayTime)[_$_ad8d[156]]()){bc[_$_ad8d[165]]({img:be[_$_ad8d[164]],name:be[_$_ad8d[104]],level:be[_$_ad8d[47]]});r++};if(r== 8){return}}}catch(err){console[_$_ad8d[166]](err)}});if(bc[_$_ad8d[94]]< 8){bb= bc[_$_ad8d[94]]};todayRankHtml= _$_ad8d[126];for(var i=0;i< bb;i++){todayRankHtml+= _$_ad8d[168]+ (i+ 1)+ _$_ad8d[169]+ bc[i][_$_ad8d[164]]+ _$_ad8d[170]+ bc[i][_$_ad8d[104]]+ _$_ad8d[171]+ bc[i][_$_ad8d[47]]+ _$_ad8d[172]};levelRank[_$_ad8d[107]]= todayRankHtml;loadBg[_$_ad8d[14]][_$_ad8d[106]](_$_ad8d[120])})}var switchButton=document[_$_ad8d[7]](_$_ad8d[176]);var rankTitle=document[_$_ad8d[7]](_$_ad8d[177]);switchButton[_$_ad8d[11]]= function(){if(rankTitle[_$_ad8d[107]]== _$_ad8d[178]){levelRank[_$_ad8d[107]]= pastRankHtml;rankTitle[_$_ad8d[107]]= _$_ad8d[179];switchButton[_$_ad8d[107]]= _$_ad8d[180]}else {levelRank[_$_ad8d[107]]= todayRankHtml;rankTitle[_$_ad8d[107]]= _$_ad8d[178];switchButton[_$_ad8d[107]]= _$_ad8d[181]}}