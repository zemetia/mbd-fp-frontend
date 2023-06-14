import { WahanaSeniPendaftaran3DForm } from '@/types/entities/main-event/wahana-seni';

export const setCookiesPendaftaran3D = (data: WahanaSeniPendaftaran3DForm) => {
  localStorage.setItem('@ami-drive/pendaftaran-3d', JSON.stringify(data));
};

export const getCookiesPendaftaran3d = () => {
  const data = localStorage.getItem('@ami-drive/pendaftaran-3d');
  if (!data) return null;
  return JSON.parse(data) as WahanaSeniPendaftaran3DForm;
};
