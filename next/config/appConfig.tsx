const masterConfig = {
  local: {
    server_url: 'http://localhost:4000',
  },
  staging: {
    server_url: '',
  },
  prod: {
    server_url: '',
  },
};

export const { server_url } = masterConfig['local'];
