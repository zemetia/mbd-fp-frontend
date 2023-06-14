import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import api from '@/lib/api';
import { getToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import useDialogStore from '@/store/useDialogStore';
import { ApiReturn } from '@/types/api';
import { LoginRespond } from '@/types/entities/user';

type LayoutOpt = {
  children: React.ReactNode;
  withFooter?: boolean;
  withNavbar?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function Layout({
  children,
  withFooter = true,
  withNavbar = true,
}: LayoutOpt) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  const login = useAuthStore.useLogin();
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const token = getToken();

  React.useEffect(() => {
    if (!isAuthenticated && token) {
      api.get<ApiReturn<LoginRespond>>('/user/me').then((user) => {
        login({
          name: user.data.data.name,
          email: user.data.data.email,
          role: user.data.data.role,
          membership: user.data.data.membership,
          photo_url: user.data.data.photo_url,
          token: token,
        });
      });
    }
  }, [token, isAuthenticated, login]);

  return (
    <div className='overflow-x-hidden bg-[#f1f1f1]'>
      {withNavbar && <Navbar />}
      {children}
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
      {withFooter && <Footer />}
    </div>
  );
}
