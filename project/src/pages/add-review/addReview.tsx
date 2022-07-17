// import { ChangeEvent, FormEvent, TextareaHTMLAttributes, useState } from 'react';
import CommentForm from '../../components/comment-form/commentForm';
import Logo from '../../components/logo/logo';
import { ListFilmsType } from '../../types/film';

function AddReview({films}: ListFilmsType) {
  const film = films.filter((element) => `/films/${element.id}/review` === window.location.pathname);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film[0].title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film[0].src} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <CommentForm/>

    </section>
  );
}

export default AddReview;
