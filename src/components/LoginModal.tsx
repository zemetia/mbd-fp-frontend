import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/typography/Typography';
import { REG_EMAIL } from '@/constant/regex';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { Login } from '@/types/entities/login';
import { LoginRespond } from '@/types/entities/user';

type loginModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  registerSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({
  open,
  setOpen,
  registerSetOpen,
}: loginModalProps) {
  const methods = useForm<Login>();
  const { handleSubmit } = methods;
  const login = useAuthStore.useLogin();

  const { mutate, isLoading } = useMutationToast<void, Login>(
    useMutation(async (data) => {
      const res = await api.post('/user/login', data);
      const { token } = res.data.data;
      setToken(token);

      const user = await api.get<ApiReturn<LoginRespond>>('/user/me');
      login({
        name: user.data.data.name,
        email: user.data.data.email,
        role: user.data.data.role,
        membership: user.data.data.membership,
        photo_url: user.data.data.photo_url,
        token: token,
      });

      setOpen(false);

      return res;
    })
  );

  const onSubmit = (data: Login) => mutate(data);

  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Body className='p-5'>
        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='w-full flex flex-col space-y-10'
            >
              {/* Header Form */}
              <div className='flex flex-col'>
                <Typography variant='h5' className='font-semibold'>
                  Masuk
                </Typography>
                <Typography variant='p' color='secondary'>
                  Silahkan masuk dengan akun anda
                </Typography>
              </div>
              {/* Input Form */}
              <div className='flex flex-col space-y-4'>
                <Input
                  id='email'
                  label='Email'
                  type='email'
                  placeholder='Masukkan Email'
                  validation={{
                    required: 'Email wajib diisi',
                    pattern: {
                      value: REG_EMAIL,
                      message: 'Alamat email tidak valid',
                    },
                  }}
                />
                <PasswordInput
                  id='password'
                  label='Kata Sandi'
                  placeholder='Masukkan Kata Sandi'
                  validation={{ required: 'Kata sandi wajib diisi' }}
                />
                <Typography variant='c' className='flex justify-end'>
                  <UnstyledLink
                    href='/forgot-password'
                    className='w-fit font-semibold underline underline-offset-2 text-success-500 hover:text-success-600'
                  >
                    Lupa Kata Sandi?
                  </UnstyledLink>
                </Typography>
              </div>
              {/* Submit Form */}
              <div className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  variant='green'
                  size='large'
                  isLoading={isLoading}
                >
                  Masuk
                </Button>
                <div className='flex flex-row justify-center space-x-2'>
                  <Typography variant='c'>Belum punya akun?</Typography>
                  <Typography variant='c'>
                    <Button
                      onClick={() => {
                        setOpen(false);
                        registerSetOpen(true);
                      }}
                      className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600 hover:bg-transparent bg-transparent active:bg-transparent'
                    >
                      Daftar
                    </Button>
                  </Typography>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </Modal.Body>
    </Modal>
  );
}
