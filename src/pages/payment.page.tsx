import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function PaymentPage() {
  return (
    <Layout>
      <div className='p-20 flex flow-row space-x-5'>
        <div className='flex flex-col space-y-5 w-2/3   '>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              Bank Transfer
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              Kartu Kredit / Debit
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              ATM
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              Alfamart
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              Indomaret
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              CIMB Clicks
            </Typography>
          </div>
          <div className='bg-white hover:bg-gray-100 rounded-lg shadow-lg py-3 w-full text-center'>
            <Typography variant='h6' className='text-gray-600 '>
              BCA KlikpLay
            </Typography>
          </div>
        </div>
        {/* SISI 2 */}
        <div className='flex flex-col space-y-5 w-1/3'>
          <div className='bg-white rounded-lg shadow-lg p-3 flex flex-row items-center gap-3'>
            <Typography variant='h6' className='align-middle'>
              Detail Pesanan
            </Typography>
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
          <div className='shadow-lg'>
            <Button className='w-full text-lg bg-[#9EE6AA] hover:bg-[#80b989] active:bg-[#a9ffb8] rounded-lg text-discolored-700 font-semibold'>
              Bayar
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
