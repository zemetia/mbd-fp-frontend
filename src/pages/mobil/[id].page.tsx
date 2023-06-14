import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiSteering2Fill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import CommentCard from '@/components/CommentCard';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { formatToRupiah } from '@/lib/currency';
import { Mobil } from '@/types/entities/mobil';

export default function MobilDetailPage() {
  const [mobil, setMobil] = useState<Mobil>();
  const router = useRouter();
  const mobilId = (router.query.id ?? '').toString();

  const { mutate, isLoading } = useMutationToast<void, Mobil>(
    useMutation(async (data) => {
      const res = await api.get(`/mobil/${data.id}`);
      setMobil(res.data.data);

      return res;
    })
  );

  useEffect(() => {
    mutate({ id: mobilId } as Mobil);
  }, []);

  return (
    <Layout>
      <div className='p-20 flex flow-row space-x-5'>
        <div className='flex flex-col space-y-5 w-11/12'>
          <div className='bg-white rounded-lg shadow-lg p-5 flex flex-row justify-between items-center gap-3'>
            <Typography variant='h5' className='align-middle'>
              {formatToRupiah(mobil?.price ?? 0)}/Day
            </Typography>
            <Button className='text-lg bg-[#9EE6AA] hover:bg-[#80b989] active:bg-[#a9ffb8] rounded-lg text-discolored-700 font-semibold'>
              Lanjutkan
            </Button>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-3 flex flex-row items-center gap-3 h-full'>
            <div className='w-full h-auto my-auto px-8'>
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
        </div>
        {/* SISI 2 */}
        <div className='flex flex-col space-y-5'>
          <div className='bg-white rounded-lg shadow-lg p-3 flex flex-row items-center gap-3'>
            <div>
              <NextImage
                src='/dashboard/avatar.png'
                alt='Profile Photo'
                width={100}
                height={100}
                className='w-16'
              />
            </div>
            <Typography variant='h6' className='align-middle'>
              Yoel Mountanus Sitorus
            </Typography>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-5'>
            <div className='grow flex flex-col space-y-1'>
              <Typography
                variant='p'
                className='font-semibold mb-3 flex justify-between w-full pb-3 border-b-2 border-gray-200'
              >
                <span>{mobil?.nama ?? ''}</span>
                <span>{mobil?.pelat_no ?? ''}</span>
              </Typography>
              <div className='flex flex-row gap-2 align-middle'>
                <RiSteering2Fill className='h-auto' />
                {mobil?.tipe_mesin_id ?? 1}
              </div>
              <div className='flex flex-row gap-2 align-middle'>
                <BsFillPeopleFill className='h-auto' />
                <span>{mobil?.kapasitas_penumpang ?? 0} Kursi </span>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-5'>
            <div className='grow flex flex-col space-y-1'>
              <Typography
                variant='p'
                className='font-semibold mb-3 flex justify-between w-full pb-3 border-b-2 border-gray-200'
              >
                <span>Komentar</span>
                <span>4.9</span>
              </Typography>
              <div className='flex flex-col gap-2 overflow-x-auto max-h-96'>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
