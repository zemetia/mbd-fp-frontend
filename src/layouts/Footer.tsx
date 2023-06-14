import * as React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function Footer() {
  const [showPreEvent, setShowPreEvent] = React.useState(false);
  const [showMainEvent, setShowMainEvent] = React.useState(false);

  const toggleShowPreEvent = () => {
    setShowPreEvent((prev) => !prev);
  };

  const toggleShowMainEvent = () => {
    setShowMainEvent((prev) => !prev);
  };

  return (
    <footer className='relative z-50 w-full bg-[#9EE6AA] font-secondary'>
      <div className='mx-auto w-[95%] md:w-10/12'>
        <div className='flex flex-col justify-between md:flex-row md:items-center  pt-10 md:pt-16'>
          <div className='flex flex-col items-center justify-center'>
            <NextImage
              src='/logo-footer.png'
              alt='footer logo'
              width='251'
              height='251'
              priority={true}
              className='w-[121px] md:w-[180px] lg:w-full'
            />
          </div>
          <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 text-left space-x-0 md:space-x-6 lg:space-x-[60px] items-center sm:items-start justify-center mx-auto md:mx-0 mt-10 md:mt-0'>
            {/* Pre Event Start */}
            <div className='flex flex-col'>
              <button
                onClick={toggleShowPreEvent}
                className='mx-auto flex items-center md:mx-0 text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] cursor-pointer gap-5 md:cursor-default'
              >
                AmiDrive
                <AiFillCaretDown
                  size={14}
                  className={`mt-1 ${
                    showPreEvent ? 'rotate-180' : 'rotate-0'
                  } block text-2xl transition duration-200 md:hidden`}
                />
              </button>
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
                  className='w-32'
                />
              </UnstyledLink>
            </div>
            {/* Pre Event End */}
            {/* Social Media Start */}
            <div className='flex flex-col md:items-center items-center sm:items-start justify-center'>
              <Typography
                className=' font-bold text-white text-[16px] md:text-[18px] lg:text-[20px]'
                variant='t'
              >
                Social Media
              </Typography>
              <div className='flex flex-row items-center justify-between text-discolored-300 space-x-5 mt-5'>
                <PrimaryLink
                  variant='discolored'
                  href='https://www.instagram.com/ami-drive/?hl=en'
                >
                  <FaInstagram className='w-6 md:w-fit' size={28} />
                </PrimaryLink>
                <PrimaryLink
                  variant='discolored'
                  href='https://www.tiktok.com/@ami-drive'
                >
                  <FaTiktok className='w-6 md:w-fit' size={28} />
                </PrimaryLink>
                <PrimaryLink
                  variant='discolored'
                  href='https://www.youtube.com/@ami-drive2023'
                >
                  <FaYoutube className='w-6 md:w-fit' size={28} />
                </PrimaryLink>
                <PrimaryLink
                  variant='discolored'
                  href='https://twitter.com/ami-drive'
                >
                  <FaTwitter className='w-6 md:w-fit' size={28} />
                </PrimaryLink>
              </div>
            </div>
            {/* Social Media End */}
          </div>
        </div>
        <hr className='h-[1px] bg-white md:bg-discolored-800 mt-10 md:mt-[67px]' />
      </div>
    </footer>
  );
}
