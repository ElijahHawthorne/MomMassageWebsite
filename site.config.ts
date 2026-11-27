// Editable business content (name, contact details, hours, services, about text, etc.)
// lives in content/site.json. It is edited through the admin app at
// https://admin.amomentofpeacespa.com, which commits changes to that file.
//
// Technical settings that should not be editable from the admin app stay here.

import content from './content/site.json';

export const site = {
  ...content,
  url: 'https://amomentofpeacespa.com',
  formEndpoint: '', // Formspree URL like https://formspree.io/f/xxxxxxx (leave empty to hide the form)
};

export type Site = typeof site;
