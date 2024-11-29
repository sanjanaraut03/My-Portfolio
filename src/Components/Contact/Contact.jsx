import React, { useEffect } from 'react';
import './Contact.css';
import contact from '../../assets/contact.png';

const Contact = () => {
  useEffect(() => {
    const formElement = document.querySelector('.rightcontact form');
    const leftContactImage = document.querySelector('.leftcontact img');

    const observerOptions = {
      root: null, // Use the viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    // Callback for the Intersection Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === formElement) {
            formElement.classList.add('slide-in-right');
          } else if (entry.target === leftContactImage) {
            leftContactImage.classList.add('slide-in-left');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe elements
    if (formElement) observer.observe(formElement);
    if (leftContactImage) observer.observe(leftContactImage);

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt="Contact" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/manyplgl" method="POST">
          <input name="Username" type="text" placeholder="Name" />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="message" id="textarea" placeholder="Message me"></textarea>
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
