import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

export default function Fetch() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/Xilu3wHgFKF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, phone: phone, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <div className="form-msg"><div className="container">
        <p>We've received your message, thank you for contacting us!</p>
      </div>
    </div>
    
  }

  return (
    <>
    <div className="contact-form">
      <div className="container">
        <div className="form-box">
          <div className="heading">
            <h1 className="section-heading">Get in Touch</h1>
          </div>
            <form onSubmit={submit}>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 form-group">
                  <label htmlFor="firstName">First Name</label>
                  <PersonIcon />
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <PersonIcon />
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 form-group">
                  <label htmlFor="email">Email</label>
                  <EmailIcon />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <PhoneIcon />
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-12 form-group">
                  <label htmlFor="message">Message</label>
                  <EditIcon />
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="col-xl-12 form-btn">
                  <button type="submit">Submit <SendIcon /></button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}