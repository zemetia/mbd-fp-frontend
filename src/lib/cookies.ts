import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Login
export const getToken = (): string => {
  return cookies.get('@ami-drive/token');
};

export const setToken = (token: string) => {
  cookies.set('@ami-drive/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@ami-drive/token', {
    path: '/',
  });
};
// Login
