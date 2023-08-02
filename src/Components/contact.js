import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [formState, handleSubmit] = useForm("mvonyvyz");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    handleSubmit()
    if (formState.succeeded && !formSubmitted) {
      setFormSubmitted(true)
    }
  }

  return (
    <section id="contact" className="contactSection" style={background}>
      <form onSubmit={handleFormSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email" />
      <ValidationError
        prefix="Email"
        field="email"
        errors={formState.errors} />
      <textarea
        id="message"
        name="message" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={formState.errors} />
      <button
        type="submit"
        disabled={formState.submitting}>Submit</button>
    </form>
  </section>
  );
}

export default Contact;
