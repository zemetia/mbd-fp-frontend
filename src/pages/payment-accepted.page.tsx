import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function PaymentAcceptedPage() {
  return (
    <Layout withFooter={false}>
      <div className='bg-[url("/images/membership/bottom.png")] h-screen w-screen bg-no-repeat bg-bottom'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='mb-10'>
            <Typography className='text-[32px] lg:text-[48px] text-gray-600'>
              Yey! Pembayaran Anda Telah Berhasil
            </Typography>
          </div>
          <div>
            <div>
              <NextImage
                src='/payment-people.png'
                alt='login illustration center'
                width='400'
                height='405'
                priority={true}
                className='w-[17rem]'
              />
            </div>
          </div>
          <div className='grid grid-flow-col mt-16 gap-8'>
            <Button className='py-10 w-full text-lg bg-[#a9ffb8] hover:bg-[#80b989] active:bg-[#a9ffb8] rounded-lg text-discolored-700 font-semibold'>
              Kembali ke Homepage
            </Button>
            <Button className='py-10 w-full text-lg bg-[#a9ffb8] hover:bg-[#80b989] active:bg-[#a9ffb8] rounded-lg text-discolored-700 font-semibold'>
              Lihat Detail Transaksi
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
