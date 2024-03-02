'use client';

import '@/app/ui/global.css';
import { Inter as FontSans } from 'next/font/google';
import {
  FileText,
  Gauge,
  HardDrive,
  Play,
  Settings,
  Variable,
} from 'lucide-react';

import { Nav } from './components/nav';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

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
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes,
        )}`;
      }}
      className="h-full max-h-[800px] items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={
          ((collapsed: boolean) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed,
            )}`;
          }) as any
        }
        className={cn(
          isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out',
        )}
      >
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: '대시보드',
              icon: Gauge,
              href: '/tvog/dashboard',
            },
            {
              title: '데이터',
              icon: HardDrive,
              href: '/tvog/data',
            },
            {
              title: '모수 추정',
              icon: Variable,
              href: '/tvog/parameter',
            },
            {
              title: '시뮬레이션',
              icon: Play,
            },
            {
              title: '검증 보고서',
              icon: FileText,
            },
          ]}
        />
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: '관리',
              icon: Settings,
            },
          ]}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
