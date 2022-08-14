import { useEffect } from 'react';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchComments } from '../../store/api-actions';
import { getComments } from '../../store/film-process/selectors';
import { ResponseComments } from '../../types/film';
import { Comment } from '../comment/comment';

type ReviewsType = {
  id:number | undefined;
}

function MoviePageReviews ({id}: ReviewsType) {
  const dispatch = useAppDisptach();

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id));
    }
  }, [dispatch, id]);

  const comments = useAppSelector(getComments);
  const commentsFirstCol: ResponseComments = [];
  const commentsSecondCol: ResponseComments = [];
  comments.forEach((comment, index) => {
    if (index % 2) {
      commentsSecondCol.push(comment);
    } else {
      commentsFirstCol.push(comment);
    }
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {commentsFirstCol.map((comment) => <Comment item={comment} key={comment.id}></Comment>)}
      </div>
      <div className="film-card__reviews-col">
        {commentsSecondCol.map((comment) => <Comment item={comment} key={comment.id}></Comment>)}
      </div>
    </div>
  );
}

export {MoviePageReviews};
