import 'react-calendar/dist/Calendar.css';

import { useState } from 'react';
import Calendar from 'react-calendar';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function DetailPage() {
  const [lokasi, setLokasi] = useState<string>('');

  return (
    <Layout>
      <div className='p-20 flex flow-row space-x-5'>
        <div className='flex flex-col space-y-5 w-11/12'>
          <div className='bg-white rounded-lg shadow-lg p-3 flex flex-row items-center gap-3 h-full w-full my-auto px-8'>
            <NextImage
              src='/default-car.png'
              alt='login illustration center'
              width='256'
              height='97'
              priority={true}
              className='w-full'
            />
          </div>
        </div>
        {/* SISI 2 */}
        <div className='flex flex-col space-y-5'>
          <div>
            <Calendar value={new Date()} />
          </div>
          <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5'>
            <div className='grow flex flex-col space-y-5 border-b-2 border-gray-200 pb-5'>
              <Typography className='text-base flex justify-between w-full'>
                <span>Toyota Supra(1 Hari)</span>
                <span>Rp 1.000.000</span>
              </Typography>
              <Typography className='text-base flex justify-between w-full'>
                <span>Diskon Membership</span>
                <span>-Rp 20.000</span>
              </Typography>
              <Typography className='text-base flex justify-between w-full'>
                <span>Biaya Layanan</span>
                <span>Rp 10.000</span>
              </Typography>
            </div>
            <Typography
              variant='p'
              className='font-semibold text-base flex justify-between w-full'
            >
              <span>Total</span>
              <span>Rp 10.000</span>
            </Typography>
          </div>
          <div className='w-full'>
            <Button className='w-full text-lg bg-[#9EE6AA] hover:bg-[#80b989] active:bg-[#a9ffb8] rounded-lg text-discolored-700 font-semibold'>
              Pilih
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
