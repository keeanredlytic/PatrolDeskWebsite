import React, { useState } from 'react';
import './ContactPage.css';
import logo from '../assets/PDLANDINGLOGO.png';

function Contact() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.location.href = '/';
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: Using EmailJS (Free service)
      // Sign up at https://www.emailjs.com/ and get your service ID, template ID, and public key
      // Then uncomment and replace the values below:
      
      /*
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'support@patroldesk.com',
            subject: `Contact Form: ${formData.name}`
          }
        }),
      });
      */

      // Option 2: Using Formspree (Free service)
      // Sign up at https://formspree.io/ and get your form ID
      // Then replace YOUR_FORM_ID below:
      
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _to: 'support@patroldesk.com',
          _subject: `Contact Form: ${formData.name}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Fallback to mailto if service fails
      const mailtoLink = `mailto:support@patroldesk.com?subject=Contact Form: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-simple">
      <nav className="legal-nav">
        <div className="legal-nav-container">
          <div className="legal-nav-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="PatrolDesk Logo" className="logo-image" />
            <span>PatrolDesk</span>
          </div>
          <a href="/" className="back-home-link">← Back to Home</a>
        </div>
      </nav>
      
      <div className="contact-container-simple">
        <div className="contact-header-simple">
          <h1>contact us</h1>
          <p>have a question or feedback about PatrolDesk? we'd love to hear from you.</p>
        </div>

        <div className="contact-form-wrapper-simple">
          <form className="contact-form-simple" onSubmit={handleSubmit}>
            <div className="form-group-simple">
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-simple">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-simple">
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="form-success">
                Thank you! Your message has been sent.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-error">
                Something went wrong. Please try again or email us directly at support@patroldesk.com
              </div>
            )}

            <button type="submit" className="submit-btn-simple" disabled={isSubmitting}>
              {isSubmitting ? 'sending...' : 'send message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

