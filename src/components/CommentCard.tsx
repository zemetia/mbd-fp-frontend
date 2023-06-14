import NextImage from '@/components/NextImage';

export default function CommentCard() {
  return (
    <div className='flex flex-row gap-2 border-b-2 border-gray-200 pb-3 max-w-md'>
      <div className=''>
        <NextImage
          src='/dashboard/avatar.png'
          alt='Profile Photo'
          width={100}
          height={100}
          className='w-16'
        />
      </div>
      <span className='grow text-sm text-gray-500 p-3'>
        Mobilnya sangat wah sekali manteman, sampai saya bisa membuat pesta
        didalamnya.
      </span>
      <div className='p-3'>5.0</div>
    </div>
  );
}
