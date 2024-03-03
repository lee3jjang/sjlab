'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    href?: string;
    label?: string;
    icon: LucideIcon;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathname = usePathname();
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href ?? '#'}
                  className={cn(
                    buttonVariants({
                      variant: link.href?.startsWith(pathname)
                        ? 'default'
                        : 'ghost',
                      size: 'icon',
                    }),
                    'h-9 w-9',
                    link.href?.startsWith(pathname) &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="text-muted-foreground ml-auto">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href ?? '#'}
              className={cn(
                buttonVariants({
                  variant: link.href?.startsWith(pathname)
                    ? 'default'
                    : 'ghost',
                  size: 'sm',
                }),
                link.href?.startsWith(pathname) &&
                  'dark:bg-muted dark:hover:bg-muted dark:text-white dark:hover:text-white',
                'justify-start',
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    'ml-auto',
                    link.href?.startsWith(pathname) &&
                      'text-background dark:text-white',
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}
