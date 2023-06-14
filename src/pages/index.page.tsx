import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DatePicker from '@/components/forms/DatePicker';
import Input from '@/components/forms/Input';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';
import { Login } from '@/types/entities/login';

export default function HomePage() {
  const methods = useForm<Login>();
  const [tanggalAmbil, setTanggalAmbil] = useState<Date>(new Date());
  const [tanggalKembali, setTanggalKembali] = useState<Date>(new Date());

  return (
    <Layout>
      <div>
        <div className='xl:w-1/3 h-full min-h-screen pt-16 px-16 bg-green-100/50 xl:ml-16'>
          <Typography
            variant='h4'
            className='font-semibold text-gray-600 mb-16'
          >
            Cari Kendaraan Anda Sekarang
          </Typography>
          <FormProvider {...methods}>
            <form className='w-full flex flex-col space-y-16' action='/order'>
              {/* Input Form */}
              <div className='flex flex-col space-y-10'>
                <Input
                  id='lokasi'
                  label='Lokasi Rental'
                  type='text'
                  placeholder='Masukkan Lokasi Rental'
                  validation={{
                    required: 'Email wajib diisi',
                  }}
                  inputClassName='rounded-full p-5'
                />
                <div className='grid grid-flow-col gap-5 w-full'>
                  <DatePicker
                    id='tgl_ambil'
                    label='Tanggal Ambil'
                    className='w-full rounded-full p-5 border-0'
                    defaultValue={tanggalAmbil.toISOString()}
                  ></DatePicker>
                  <DatePicker
                    id='tgl_kembali'
                    label='Tanggal Kembali'
                    className='w-full rounded-full p-5 border-0'
                    defaultValue={tanggalKembali.toISOString()}
                  ></DatePicker>
                </div>
              </div>
              {/* Submit Form */}
              <div className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  variant='green'
                  size='large'
                  className='rounded-full'
                >
                  C A R I
                </Button>
              </div>
              <NextImage
                src='/mobiljalan.png'
                alt='login illustration center'
                width='857'
                height='700'
                priority={true}
                className='absolute min-h-screen right-0 top-0 w-7/12 hidden xl:block'
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  );
}
