'use client';

import { Separator } from '@/components/ui/separator';

export default function TvogDataPage() {
  return (
    <>
      <div className="flex items-center px-4 py-2">
        <h1 className="text-xl font-bold">데이터</h1>
      </div>
      <Separator />
      <div className="p-4">
        <div>
          데이터셋
          <div>
            금리
            <div>화폐 일자 만기 값</div>
          </div>
          <div>
            스왑션
            <div>화폐 일자 테너 만기 값</div>
          </div>
        </div>
      </div>
    </>
  );
}
