import { combineReducers } from "redux";
import BooksReducer from "./booksReducer";
import SelectedBook from "./selectedBookReducer";

const rootReducer = combineReducers({
	books: BooksReducer,
	selectBook: SelectedBook
});

export default rootReducer;
