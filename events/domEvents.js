import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import { getSingleAuthor, deleteSingleAuthor, getAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';
import { getAuthorDetails, getBookDetails } from '../api/mergedData';
import viewBook from '../pages/viewBook';
import viewAuthor from '../pages/viewAuthor';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getBookDetails(firebaseKey).then(viewBook);
      console.warn('VIEW BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getAuthorDetails(firebaseKey).then(viewAuthor);
      console.warn('VIEW AUTHOR', e.target.id);
      console.warn(e.target.id.split('--'));
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE AUTHOR', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleAuthor(firebaseKey).then(() => {
          getAuthors().then(showAuthors);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
      addAuthorForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
      console.warn('EDIT AUTHOR', e.target.id);
    }
  });
};

export default domEvents;
