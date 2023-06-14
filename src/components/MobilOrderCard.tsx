import { useRouter } from 'next/router';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiSteering2Fill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { formatToRupiah } from '@/lib/currency';

type MobilOrderCardProps = {
  image?: string | undefined;
  namaMobil: string;
  tipePerseneling: string;
  jumlahPenumpang: number;
  harga: number;
};

export default function MobilOrderCard({
  image,
  namaMobil,
  tipePerseneling,
  jumlahPenumpang,
  harga,
}: MobilOrderCardProps) {
  const router = useRouter();
  return (
    <div className='h-auto w-full rounded-lg shadow-lg px-5 py-8'>
      <div className='flex flex-row'>
        <NextImage
          src='/default-car.png'
          alt='login illustration center'
          width='256'
          height='97'
          priority={true}
          className='h-full'
        />
        <div className='grow flex flex-col pl-5 space-y-1'>
          <Typography variant='p' className='font-semibold '>
            {namaMobil}
          </Typography>
          <div className='flex flex-row gap-1 align-middle'>
            <RiSteering2Fill className='h-full' />
            {tipePerseneling}
          </div>
          <div className='flex flex-row gap-1 align-middle'>
            <BsFillPeopleFill className='h-full' />
            <span>{jumlahPenumpang} Kursi </span>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <Typography variant='h6'>{formatToRupiah(harga)}/Day</Typography>
          <Button
            className='bg-[#9EE6AA] text-black hover:bg-[#80b989] active:bg-[#a9ffb8]'
            onClick={() => router.push('/mobil/1')}
          >
            Lanjutkan
          </Button>
        </div>
      </div>
    </div>
  );
}
