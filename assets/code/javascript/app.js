var React = require('react');

var App = React.createClass({
	render: function (){
		var self = this;
		var now  = new Date().getTime();
		return (
			<div>
				Hello, This Write By VIM.
			</div>
		)
	}

});


console.log("Done.");
