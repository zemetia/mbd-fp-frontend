import { useState } from 'react';

import Button from '@/components/buttons/Button';
import LokasiCard from '@/components/LokasiCard';
import NextImage from '@/components/NextImage';
import Layout from '@/layouts/Layout';

export default function PickUpPage() {
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
          <div className='bg-white rounded-lg shadow-lg p-2 h-2/3 overflow-y-auto'>
            <LokasiCard
              setLokasi={setLokasi}
              lokasi={lokasi}
              lokasiId='1'
              namaLokasi='Oleh-oleh Bu Rudy'
              jarak={1}
            />
            <LokasiCard
              setLokasi={setLokasi}
              lokasi={lokasi}
              lokasiId='2'
              namaLokasi='Oleh-oleh Bu Yoel'
              jarak={69}
            />
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
