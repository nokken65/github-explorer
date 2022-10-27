import { memo } from 'react';

type TLicenseNameProps = { name: string };

const LicenseNameView = ({ name }: TLicenseNameProps) => {
  return (
    <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{name}</p>
  );
};

export const LicenseName = memo(LicenseNameView);
