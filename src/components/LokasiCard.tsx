import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

type LokasiCardProps = {
  lokasi: string;
  setLokasi: React.Dispatch<React.SetStateAction<string>>;
  lokasiId: string;
  namaLokasi: string;
  latitude?: string;
  longitude?: string;
  jarak: number;
};

export default function LokasiCard({
  lokasi,
  setLokasi,
  lokasiId,
  namaLokasi,
  longitude,
  latitude,
  jarak,
}: LokasiCardProps) {
  return (
    <Button
      onClick={() => {
        setLokasi(lokasiId);
      }}
      className={clsxm(
        'bg-transparent hover:bg-slate-100 w-full rounded-none border-b-2 border-gray-200 justify-start active:bg-green-100',
        lokasi == lokasiId && 'bg-[#9EE6AA]'
      )}
    >
      <Typography variant='p' className='grid grid-flow-row text-left'>
        <span className='font-semibold'>{namaLokasi}</span>
        <span className='text-sm'>{jarak} km dari lokasi anda</span>
      </Typography>
    </Button>
  );
}
