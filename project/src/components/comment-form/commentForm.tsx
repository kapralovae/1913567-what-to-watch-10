import { ChangeEvent, FormEvent, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useAppDisptach } from '../../hooks';
import { addComment } from '../../store/api-actions';

function CommentForm () {
  const dispatch = useAppDisptach();
  // const {id} = useParams();

  const [inputData, setInputData] = useState({
    id: '2',
    rating: 0,
    comment: '',
  });

  const [, setCheck] = useState(0);
  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

    const {value, name} = evt.target;
    setCheck(Number(value));
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const postForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addComment(inputData));
  };

  return(
    <div className="add-review">
      <form onSubmit={postForm} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input onChange={inputChangeHandler} className="rating__input" id="star-10" type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-8" type="radio" name="rating" value="8" />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-6" type="radio" name="rating" value="6" />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input onChange={inputChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={inputChangeHandler} value={inputData['comment']} className="add-review__textarea" name="comment" id="comment" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentForm;
