'use client';

import '@/app/ui/global.css';
import { Inter as FontSans } from 'next/font/google';
import { FileText, Gauge, HardDrive, Play, Settings } from 'lucide-react';

import { Nav } from './tvog/components/nav';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import { MainNav } from './components/main-nav';
import { Search } from './components/search';
import { UserNav } from './components/user-nav';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const defaultLayout = [265, 440, 655];
  const navCollapsedSize = 4;

  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-2" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
