import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { addFeedback, feedbackEdit, updateFeeback } = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true)
    {
        setbtnDisabled(false);
        setRating(feedbackEdit.item.rating);
        setText(feedbackEdit.item.text);
        
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if(text === '')
    {
        setbtnDisabled(true);
        setMessage(null);
    }
    if(text !== '' && text.trim().length <= 10)
    {
        setbtnDisabled(true);
        setMessage('You must write at least 10 characters sentence for a review.');
    }
    setbtnDisabled(false);
    setMessage(null);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10)
    {
        const newFeedback = {
            text,
            rating
        }
        if(feedbackEdit.edit === true)
        {
            updateFeeback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
        setText('')
    }
  }; 

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} 
                    type="text" 
                    placeholder='Write a review...' 
                    value={text} />
                <Button 
                    text='Send' 
                    type="submit" 
                    isDisabled={btnDisabled}
                />
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm