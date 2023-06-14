import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function MobilOrderHistoryCard() {
  return (
    <div className='bg-white rounded-lg shadow-lg flex flex-col w-fit border-2 border-gray-400'>
      <div className='p-2 flex flex-col w-full border-b-2 border-gray-300'>
        <div>
          <NextImage
            src='/default-car.png'
            alt='login illustration center'
            width='256'
            height='97'
            priority={true}
            className='h-full'
          />
        </div>
        <div className='flex flex-row items-center gap-3 mt-2'>
          <div>
            <NextImage
              src='/dashboard/avatar.png'
              alt='Profile Photo'
              width={100}
              height={100}
              className='w-12'
            />
          </div>
          <Typography className='text-sm align-middle'>
            Yoel Mountanus Sitorus
          </Typography>
        </div>
      </div>
      <div className='p-2 flex flex-col w-full gap-2'>
        <Typography className='text-base flex justify-between w-full'>
          <span>Toyota Supra</span>
          <span>L 1232 MEK</span>
        </Typography>
        <Typography className='text-base'>
          11/12/02 - 12/12/02(1 Day)
        </Typography>
        <Typography className='text-base'>Rp. 1.000.000</Typography>
        <Typography className='text-base'>Oleh-oleh Bu Rudy</Typography>
      </div>
    </div>
  );
}
