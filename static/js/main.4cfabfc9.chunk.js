(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),u=(a(13),a(1)),c=a(2),l=a(4),o=a(3),h=a(7),d=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"square",onClick:function(){return e.props.onClick()}},this.props.value)}}]),a}(r.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0,xWin:0,oWin:0},n}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"handleClick",value:function(e){var t=this.state.squares.slice(),a=v(t),n=!1;a||t[e]||(t[e]=this.state.xIsNext?"X":"O",a=v(t),!n&&a&&(n=!0,"X"===a?this.setState({xWin:this.state.xWin+1}):"O"===a&&this.setState({oWin:this.state.oWin+1})),this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"resetBoard",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0})}},{key:"resetScore",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0,xWin:0,oWin:0})}},{key:"render",value:function(){var e,t,a,n=this,s=v(this.state.squares);return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),t="X Winning : "+this.state.xWin,a="O Winning : "+this.state.oWin,r.a.createElement("div",null,r.a.createElement("div",{className:"status"},e),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),r.a.createElement("div",{className:"score-board"},r.a.createElement("div",null," ",t),r.a.createElement("div",null," ",a)),r.a.createElement("div",{className:"game-info"},r.a.createElement("button",{onClick:function(){return n.resetScore()}}," reset "),r.a.createElement("button",{onClick:function(){return n.resetBoard()}}," new game")))}}]),a}(r.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(h.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null}var f=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(m,null))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4cfabfc9.chunk.js.map