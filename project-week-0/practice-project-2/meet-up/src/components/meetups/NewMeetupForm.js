import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Találkozó címe</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Találkozó képe</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            defaultValue="https://lh3.googleusercontent.com/pw/AM-JKLUEnFH9c0XfTODLNSwZ3FvG0vFZL-8kIzo7CTiSNDoquScFhNLCSMwjsVRNI7yaY48TOT7p9uiT-HjglLm7bSyAON7NIoGFKs9TN-3GEpyQ0-5ruktKPFAkw4gI1m5-0LdxPnYPLz_n5t0zF3LDjEHS4A=w1081-h811-no?authuser=0"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Cím</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Leírás</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
