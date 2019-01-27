export const GUEST_ROUTES = {
  auth_root:       '/auth',
  password_forgot: '/password/forgot',
  password_reset:  '/password/reset',
};

export const BASE_PATH = 'http://localhost:3500';

export default {
  env:               'production',
  organisation:      "Greg's MadKudus",
  app:               'Kudus',
  links:             { },
  breakPoints:       {
    desktopTablet: 1040,
  },
  contact:           {
    commercial: 'ajkula@gmail.com',
    technical:  'ajkula@gmail.com',
    billing:    'ajkula@gmail.com',
    support:    'ajkula@gmail.com',
  },
  routes: {
    auth: {
      // for future authentication route!
      root: GUEST_ROUTES.auth_root,
    },
    kudus: {
      root:      BASE_PATH + "/kudus",
      stats:     BASE_PATH + "/kudus",
    },
  },
  path: {
    kudus: '/kudus',
    stats: '/stats',
  }
}