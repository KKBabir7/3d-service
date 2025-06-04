const baseURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const api = {
  endpoint: {
    homedata: `${baseURL}/data/home.json`,
    aboutdata: `${baseURL}/data/about.json`,
    // servicesdata: `${baseURL}/data/services.json`,
    // contactdata: `${baseURL}/data/contact.json`,
  },
};

export default api;
