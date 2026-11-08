// All business details live here. Replace the placeholder values with the real ones.
// Nothing else in the project needs to change for basic content updates.

export const site = {
  name: 'Serenity Massage',                 // TODO: business name
  tagline: 'Therapeutic massage to relax, restore and recover.',
  therapist: 'Lia Hawthorne',               // TODO: mom's name and credentials
  licenseNumber: 'MA00000',                 // TODO: license number (confirm what Florida requires in advertising)
  phone: '(555) 555-5555',                  // TODO
  email: 'hello@example.com',               // TODO
  url: 'https://example.com',               // TODO: final domain
  bookingUrl: '#contact',                   // TODO: replace with the Square Appointments / booking link
  formEndpoint: '',                         // TODO: Formspree URL like https://formspree.io/f/xxxxxxx (leave empty to hide the form)
  address: {
    street: '123 Main St',                  // TODO (or remove if she works from a home studio or travels)
    city: 'Sanford',
    state: 'FL',
    zip: '32771',
  },
  serviceArea: 'Serving Sanford, Lake Mary and the greater Orlando area.', // TODO
  hours: [
    { days: 'Monday to Friday', time: '9:00 AM to 6:00 PM' },
    { days: 'Saturday', time: '10:00 AM to 4:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  services: [
    { name: 'Swedish Massage', description: 'Gentle, flowing strokes to ease tension and promote relaxation.', prices: [{ length: '60 min', price: '$80' }, { length: '90 min', price: '$115' }] },
    { name: 'Deep Tissue Massage', description: 'Firm pressure that targets chronic tightness and sore muscles.', prices: [{ length: '60 min', price: '$95' }, { length: '90 min', price: '$135' }] },
    { name: 'Prenatal Massage', description: 'Supportive, comfortable care for expecting mothers.', prices: [{ length: '60 min', price: '$90' }] },
  ],
  about: [
    'Share a short, warm introduction here: who you are, how long you have practiced, and what a visit feels like.',
    'Mention your training, your approach, and who you like to work with, such as athletes, desk workers or people with chronic pain.',
  ],
  policies: 'Please arrive 5 minutes early. 24 hours notice is appreciated for cancellations.', // TODO
};

export type Site = typeof site;
