import Image from 'next/image';
import { cn } from '~/lib/utils';

interface StatCardProps {
  type: 'appointments' | 'pending' | 'cancelled';
  count: number;
  icon: string;
  label: string;
}

export const StatCard = ({ type, count, icon, label }: StatCardProps) => {
  return (
    <div
      className={cn('stat-card', {
        'bg-appointments': type === 'appointments',
        'bg-pending': type === 'pending',
        'bg-cancelled': type === 'cancelled',
      })}
    >
      <div className='flex items-center gap-4'>
        <Image className='size-9 w-fit' src={icon} alt={label} width={24} height={24} />
        <h2 className='text-32-bold text-white'>{count}</h2>
      </div>
      <p className='text-14-regular'>{label}</p>
    </div>
  );
};
