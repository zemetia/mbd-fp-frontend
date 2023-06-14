import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/typography/Typography';
import { REG_EMAIL, REG_PHONE } from '@/constant/regex';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { SignUp } from '@/types/entities/signup';

type registerModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loginSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({
  open,
  setOpen,
  loginSetOpen,
}: registerModalProps) {
  const methods = useForm<SignUp>();
  const { handleSubmit } = methods;

  const { mutate: createUser, isLoading: createUserIsLoading } =
    useMutationToast<void, SignUp>(
      useMutation((data) => {
        const res = api.post('/user', data);
        return res;
      })
    );

  const doCreateUser = (data: SignUp) => {
    createUser(data);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Body className='p-5'>
        <div>
          <FormProvider {...methods}>
            {/* Form view */}
            <form
              onSubmit={handleSubmit(doCreateUser)}
              className='w-full flex flex-col space-y-10'
            >
              <div className='w-full flex flex-col'>
                <Typography variant='h5' className='font-semibold'>
                  Daftar
                </Typography>
                <Typography variant='p' color='secondary'>
                  Isi kolom di bawah ini untuk daftar
                </Typography>
              </div>

              <div className='w-full flex flex-col space-y-4'>
                <Input
                  id='name'
                  label='Nama'
                  type='text'
                  placeholder='Masukkan Nama'
                  validation={{
                    required: 'Nama wajib diisi',
                  }}
                />
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
                <Input
                  id='no_telp'
                  label='Nomor Telepon'
                  type='tel'
                  placeholder='Masukkan Nomor Telepon'
                  helperText='Nomor telepon harus diawali +62'
                  validation={{
                    required: 'Nomor telepon wajib diisi',
                    pattern: {
                      value: REG_PHONE,
                      message: 'Nomor telepon tidak valid',
                    },
                  }}
                />
                <Input
                  id='membership'
                  label='wee'
                  name='membership'
                  type='hidden'
                  value='Iron'
                />
              </div>

              <div className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  variant='green'
                  size='base'
                  className='py-3'
                  isLoading={createUserIsLoading}
                >
                  Daftar
                </Button>
                <div className='flex flex-row space-x-2 justify-center'>
                  <Typography variant='c'>Sudah punya akun?</Typography>
                  <Typography variant='c'>
                    <Button
                      onClick={() => {
                        setOpen(false);
                        loginSetOpen(true);
                      }}
                      className='font-semibold underline underline-offset-2 text-success-500 hover:text-success-600 hover:bg-transparent bg-transparent active:bg-transparent'
                    >
                      Masuk
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
