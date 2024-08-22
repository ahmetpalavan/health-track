import Image from 'next/image';
import { AppointmentForm } from '~/components/forms';
import { getPatient } from '~/lib/actions/patient.actions';
import * as Sentry from '@sentry/nextjs';

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  Sentry.metrics.set(patient.name, 'patient_name');
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[860px] flex-1 justify-between'>
          <Image src='/icons/logo-full.svg' height={1000} width={1000} alt='logo' className='mb-12 h-10 w-fit' />
          <AppointmentForm patientId={patient?.$id} type='create' userId={userId} />
          <p className='copyright mt-10 py-12'>© 2024 HealthTrack</p>
        </div>
      </section>

      <Image src='/images/appointment-img.png' height={1500} width={1500} alt='appointment' className='side-img max-w-[390px] bg-bottom' />
    </div>
  );
};

export default NewAppointment;
