import Image from 'next/image';
import React from 'react';
import { RegisterForm } from '~/components/forms';
import { getUser } from '~/lib/actions/patient.actions';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image src='/icons/logo-full.svg' height={1000} width={1000} alt='patient' className='mb-12 h-10 w-fit' />
          <RegisterForm user={user} />

          <p className='copyright py-12'>© 2024 HealthTrack</p>
        </div>
      </section>

      <Image src='/images/register-img.png' height={1000} width={1000} alt='patient' className='side-img max-w-[30%]' />
    </div>
  );
};

export default Register;
