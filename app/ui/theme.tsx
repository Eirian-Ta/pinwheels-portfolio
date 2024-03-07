import clsx from 'clsx';
 
export default function PageTheme({ theme }: { theme: number }) {
    return (
      <span
        className={clsx(
          'inline-flex items-center rounded-full px-2 py-1 text-xs',
          {
            'bg-gray-100 text-gray-500': theme === 0,
            'bg-green-500 text-white': theme === 1,
          },
        )}
      >
        {theme === 0 ? (
          <>
            Pending
          </>
        ) : null}
        {theme === 1 ? (
          <>
            Paid
          </>
        ) : null}
      </span>
    );
  }