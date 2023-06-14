import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import MobilOrderCard from '@/components/MobilOrderCard';
import NonFormCheckbox from '@/components/NonFormCheckbox';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { RequestLokasiDto } from '@/types/entities/lokasi';
import { Mobil } from '@/types/entities/mobil';

export default function OrderPage() {
  const router = useRouter();
  const lokasi: string = router.query.lokasi?.toString() ?? '';
  const tglAmbil: string = router.query.tgl_ambil?.toString() ?? '';
  const tglKembali: string = router.query.tgl_kembali?.toString() ?? '';
  const [mobils, setMobils] = useState<Array<Mobil>>();

  const { mutate, isLoading } = useMutationToast<void, RequestLokasiDto>(
    useMutation(async (data) => {
      data.isPickup = false;
      data.dist = 15;
      const res = await api.get(`/lokasi`, { params: data });
      setMobils(res.data.data);

      return res;
    })
  );

  useEffect(() => {
    axios
      .get(`https://nominatim.openstreetmap.org/search?q=${lokasi}&format=json`)
      .then((res) => {
        const dataLokasi: RequestLokasiDto = res.data[0];
        mutate(dataLokasi);
      });
  }, [lokasi]);

  return (
    <Layout>
      <section className='w-full p-20'>
        <div className='flex flex-row space-x-12'>
          <div className='w-[20rem] flex flex-col space-y-5'>
            <div className='shadow-lg bg-white rounded-lg p-5'> test </div>
            <div className='shadow-lg bg-white rounded-lg p-5 flex flex-col'>
              <div className='border-b-2 border-b-gray-200 p-2'>
                <Typography variant='p' className='mb-3'>
                  Tipe Perseneling
                </Typography>
                <div className='mb-3'>
                  <NonFormCheckbox name='persneling[]' label='Manual' />
                  <NonFormCheckbox name='persneling[]' label='Automatic' />
                  <NonFormCheckbox name='persneling[]' label='Semi-Automatic' />
                </div>
              </div>
              <div className='border-b-2 border-b-gray-200 p-2'>
                <Typography variant='p' className='mb-3'>
                  Tipe Perseneling
                </Typography>
                <div className='mb-3'>
                  <NonFormCheckbox name='mesin[]' label='Electric' />
                  <NonFormCheckbox name='mesin[]' label='Hybrid' />
                  <NonFormCheckbox name='mesin[]' label='Bensin' />
                </div>
              </div>
              <div className='border-b-2 border-b-gray-200 p-2'>
                <Typography variant='p' className='mb-3'>
                  Tipe Perseneling
                </Typography>
                <div className='mb-3'>
                  <NonFormCheckbox name='mobil[]' label='Sport' />
                  <NonFormCheckbox name='mobil[]' label='Van' />
                  <NonFormCheckbox name='mobil[]' label='Hatchback' />
                  <NonFormCheckbox name='mobil[]' label='SUV' />
                  <NonFormCheckbox name='mobil[]' label='MPV' />
                  <NonFormCheckbox name='mobil[]' label='Crossover' />
                  <NonFormCheckbox name='mobil[]' label='Sedan' />
                  <NonFormCheckbox name='mobil[]' label='Coupe' />
                  <NonFormCheckbox name='mobil[]' label='Truck' />
                </div>
              </div>
            </div>
          </div>
          <div className='grow flex flex-col gap-3'>
            <div className='shadow-lg bg-white rounded-lg p-5 overflow-hidden bg-[url("/images/order-search.png")] bg-no-repeat'>
              <div className='z-10'>
                <Typography variant='h4'>{lokasi}</Typography>
                <Typography variant='h6'>
                  {tglAmbil} - {tglKembali}
                </Typography>
              </div>
            </div>
            {mobils?.map((mobil: Mobil) => (
              <MobilOrderCard
                key={mobil.ID}
                id={mobil.ID}
                namaMobil={mobil.nama}
                tipePerseneling={mobil.tipe_persneling ?? ''}
                jumlahPenumpang={mobil.kapasitas_penumpang}
                harga={mobil.price}
                dataMobil={mobil}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
