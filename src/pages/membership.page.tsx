import NextImage from '@/components/NextImage';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';

export default function MembershipPage() {
  const user = useAuthStore.useUser();
  const membershipImage = `/membership/${user?.membership.toLowerCase()}.png`;

  return (
    <Layout>
      <div className=''>
        <div
          className={clsxm('h-screen flex w-full items-center content-center')}
        >
          <div className='mx-auto text-5xl text-center text-black'>
            <NextImage
              src={membershipImage}
              alt='Membership Image'
              width='500'
              height='500'
              priority={true}
              className='w-28 animate-bounce drop-shadow-xl'
            />
          </div>
        </div>
        <div className='absolute top-0 z-10 h-screen overflow-hidden w-full'>
          <NextImage
            src='/membership/top.png'
            alt='login illustration center'
            width='757'
            height='150'
            priority={true}
            className='w-[95rem] min-w-full mb-10'
          />

          <NextImage
            src='/membership/bottom.png'
            alt='login illustration center'
            width='757'
            height='250'
            priority={true}
            className='w-[95rem] min-w-full bottom-0'
          />
        </div>
      </div>
    </Layout>
  );
}
