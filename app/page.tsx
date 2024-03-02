'use client';

import { HardDrive, Home, Play, Settings } from 'lucide-react';

import { Nav } from './components/nav';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const defaultLayout = [265, 440, 655];
  const navCollapsedSize = 4;

  return (
    <div className="hidden flex-col md:flex">
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
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out',
          )}
        >
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: '홈',
                icon: Home,
                variant: 'default',
              },
              {
                title: '데이터',
                icon: HardDrive,
                variant: 'ghost',
              },
              {
                title: '시뮬레이션',
                icon: Play,
                variant: 'ghost',
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
                variant: 'ghost',
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">홈</h1>
          </div>
          <Separator />
          <div className="p-4">all</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
