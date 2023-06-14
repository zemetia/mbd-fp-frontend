import Image from 'next/image';
import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import LoginModal from '@/components/LoginModal';
import NextImage from '@/components/NextImage';
import RegisterModal from '@/components/RegisterModal';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [colorChange, setColorChange] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState<boolean>(false);
  const [openRegister, setOpenRegister] = React.useState<boolean>(false);

  const user = useAuthStore.useUser();
  const isAuthenticated = useAuthStore.useIsAuthenticated();

  const links = [
    { href: '/membership', label: 'MEMBERSHIP' },
    { href: '/order-history', label: 'ORDER' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleShowNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const imageLoader = ({ src }: { src: string }) => {
    return `${src}`;
  };

  return (
    <header
      className={clsxm(
        'fixed top-0 z-[100] w-full bg-transparent font-secondary transition-colors duration-300',
        colorChange && 'bg-green-200'
      )}
    >
      <LoginModal
        open={openLogin}
        setOpen={setOpenLogin}
        registerSetOpen={setOpenRegister}
      />
      <RegisterModal
        open={openRegister}
        setOpen={setOpenRegister}
        loginSetOpen={setOpenLogin}
      />
      {/* Desktop Nav Start */}
      <div
        className={`${
          colorChange
            ? 'h-16 transition-all duration-200 ease-in-out'
            : 'transition-all duration-200 ease-in-out h-16 md:h-20'
        } mx-auto flex flex-row-reverse md:flex-row items-center justify-between gap-x-1 layout`}
      >
        <UnstyledLink href='/' className='font-bold hover:text-discolored-500'>
          <NextImage
            src='/AMI.Drivee.png'
            alt='footer logo'
            width='197'
            height='68'
            priority={true}
            className='w-32'
          />
        </UnstyledLink>
        <div></div>
        <nav className='hidden md:block'>
          <ul className='hidden items-center justify-between md:flex space-x-6 xl:space-x-10 text-base'>
            {links.map(({ href, label }) => {
              return (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='hover:text-discolored-500 text-discolored-1000 font-medium'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              );
            })}
            {isAuthenticated ? (
              <div className='overflow-hidden rounded-full w-12'>
                <Image
                  loader={imageLoader}
                  src={
                    user?.photo_url == ''
                      ? 'http://127.0.0.1:3000/_next/image?url=%2Fimages%2Fdashboard%2Favatar.png&w=3840&q=75'
                      : user?.photo_url ?? ''
                  }
                  alt='profile'
                  width={100}
                  height={100}
                  className='w-full'
                />
              </div>
            ) : (
              <Button
                onClick={() => setOpenLogin(true)}
                className='bg-[#9EE6AA] text-discolored-700 hover:bg-[#80b989] active:bg-[#a9ffb8] font-semibold'
              >
                Masuk
              </Button>
            )}
          </ul>
        </nav>

        <div className='relative z-50 mr-0 flex md:hidden'>
          {!isOpen && (
            <GiHamburgerMenu
              className='text-3xl text-gray-900'
              onClick={toggleShowNav}
            />
          )}
        </div>
      </div>
      {/* Desktop Nav End */}
      {/* Mobile Nav Start */}
      <div
        className={`flex translate-y-[calc(100%-5rem)] md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full opacity-0'
        } absolute bottom-0 left-0 h-screen w-full flex-col bg-discolored-1000 pt-[6vh] text-white transition duration-300`}
      >
        <nav className='relative z-20 flex h-screen w-full flex-col'>
          <UnstyledLink
            href='/'
            className='font-bold hover:text-discolored-500'
          >
            <NextImage
              src='/AMI.Drivee.png'
              alt='footer logo'
              width='197'
              height='68'
              priority={true}
              className='mx-auto'
            />
          </UnstyledLink>

          <ul className='flex flex-col items-center justify-center mx-auto font-medium space-y-6 text-white text-base mt-10'>
            {links.map(({ href, label }) => {
              return (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='hover:text-discolored-500'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              );
            })}
            <Button
              onClick={() => {
                setOpenLogin(true);
                setIsOpen(false);
              }}
              className='bg-tainted-300 px-5 py-1.5 rounded-lg text-discolored-700 hover:bg-tainted-400 font-semibold'
            >
              Masuk
            </Button>
          </ul>
          {isOpen && (
            <FaTimes
              className='absolute bottom-20 right-1/2 mx-auto h-12 w-12 translate-x-1/2 rounded-lg bg-red-500 p-3 text-3xl font-thin text-discolored-900'
              onClick={toggleShowNav}
            />
          )}
        </nav>
      </div>
      {/* Mobile Nav End */}
    </header>
  );
}
