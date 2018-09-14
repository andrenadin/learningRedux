import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="books__item book">
					{book.title}
				</li>
			);
		});
	}
	render() {
		return <ul className="books__list">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);
