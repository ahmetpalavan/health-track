import Image from 'next/image';
import Link from 'next/link';
import ConfettiPage from '~/components/confetti';
import { Button } from '~/components/ui/button';
import { Doctors } from '~/constants';
import { getAppointment } from '~/lib/actions/appointment.actions';
import { formatDateTime } from '~/lib/utils';
import * as Sentry from '@sentry/nextjs';

const SuccessPage = async ({ params: { userId }, searchParams }: SearchParamProps) => {
  const appointmentsId = (searchParams?.appointmentId as string) || '';
  const appointments = await getAppointment(appointmentsId);

  Sentry.metrics.set(appointmentsId, 'appointment_id');

  const doctor = Doctors.find((doctor) => doctor.name === appointments?.primaryPhysician);

  return (
    <>
      <div className='flex h-screen max-h-screen px-3 relative'>
        <ConfettiPage />
        <div className='success-img'>
          <Link href='/'>
            <Image src='/icons/logo-full.svg' height={10} width={1000} alt='logo' className='mb-12 h-10 w-fit' />
          </Link>
          <section className='flex flex-col items-center'>
            <h2 className='header mb-6 max-w-[600px] text-center'>
              Your <span className='text-green-500'>appointment request</span> has been successfully submitted!
            </h2>
            <p>We&apos;ll be in touch shortly to confirm.</p>
          </section>
          <section className='request-details'>
            <p>Request Details</p>
            <div className='flex items-center gap-3'>
              <Image src={doctor?.image!} height={100} width={100} alt='doctor' className='rounded-full size-12' />
              <p className='whitespace-nowrap'>
                <span className='font-bold'>Dr. {doctor?.name}</span>
              </p>
            </div>
            <div className='flex gap-3'>
              <Image src='/icons/calendar.svg' height={20} width={20} alt='calendar' />
              <span>{formatDateTime(appointments?.schedule).dateTime}</span>
            </div>
          </section>
          <Button variant='outline' className='hover:bg-green-500 hover:text-white bg-dark-400' asChild>
            <Link href={`/patients/${userId}/new-appointment`}>View Appointments</Link>
          </Button>
          <p className='copyright'>© 2024 HealthTrack</p>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
