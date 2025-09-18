// EmailJS Configuration
// This file contains the EmailJS credentials for the contact form
// These are public keys and are safe to be committed to the repository

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_h0hl11i',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_otgglwi',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VQKWbHOL0i2PuRSCM'
};
