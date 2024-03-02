import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link
        href="/"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        <div className="flex gap-3">
          <Image
            src="/logo.svg"
            width={20}
            height={20}
            alt="Home"
            className="block"
          />
          <h1 className="text-xl">ESG 시스템</h1>
        </div>
      </Link>
      <Link
        href="/"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        홈
      </Link>
      <Link
        href="/"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        TVOG
      </Link>
      <Link
        href="/"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        금리리스크
      </Link>
    </nav>
  );
}
