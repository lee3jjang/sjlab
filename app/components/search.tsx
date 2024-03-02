import { Input } from '@/components/ui/input';

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="검색"
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
