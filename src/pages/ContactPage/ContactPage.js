import "./ContactPage.css";
import DefaultLayout from "../../layouts/default-layout/default-layout";
import { TextField } from "../../components/textfield/textfield";
import { TextArea } from "../../components/textarea/textarea";
import { Button } from "../../components/button/button";
import { Checkbox } from "../../components/checkbox/checkbox";
import { errorMessage, useContactPageLogic } from "./contact-page.hooks";

function ContactPage() {
  const {
    consented,
    values,
    touched,
    hasError,
    toggleConsent,
    handleBlur,
    handleChange,
  } = useContactPageLogic();

  return (
    <DefaultLayout>
      <div className="contact-page d-grid" style={{ "--gap": "48px" }}>
        <div className="d-grid" style={{ "--gap": "20px" }}>
          <h1 className="contact-page__title">Contact Me</h1>

          <p className="contact-page__sub-text">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form className="d-grid" action="#" style={{ "--gap": "32px" }}>
          <div className="d-grid" style={{ "--gap": "24px" }}>
            <div className="d-grid d-flex-md">
              <TextField
                className="contact-page__input"
                label="First name"
                name="firstName"
                value={values.firstName}
                error={errorMessage({
                  name: "firstName",
                  touched,
                  values,
                  message: "Please enter your first name",
                })}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your first name"
              />

              <TextField
                className="contact-page__input"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Last name"
                error={errorMessage({
                  name: "lastName",
                  touched,
                  values,
                  message: "Please enter your last name",
                })}
                placeholder="Enter your last name"
              />
            </div>

            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              error={errorMessage({
                name: "email",
                touched,
                values,
              })}
              label="Email"
              placeholder="yourname@email.com"
            />

            <TextArea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorMessage({
                name: "message",
                touched,
                values,
                message: "Please enter a message",
              })}
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />

            <Checkbox
              checked={consented}
              onChange={toggleConsent}
              disabled={hasError}
            >
              You agree to providing your data to XenoScript who may contact
              you.
            </Checkbox>
          </div>

          <Button disabled={hasError || !consented} type="submit">
            Send message
          </Button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default ContactPage;
