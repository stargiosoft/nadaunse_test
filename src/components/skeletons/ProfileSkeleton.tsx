/**
 * 프로필 페이지 스켈레톤 UI
 * - ProfileSkeletonEmpty: 사주 정보 미등록 상태
 * - ProfileSkeletonWithSaju: 사주 정보 등록 상태
 */

// 사주 정보 미등록 상태 스켈레톤 (전체 페이지)
export function ProfileSkeletonEmpty() {
  return (
    <div className="animate-pulse">
      {/* Profile Section */}
      <div className="content-stretch flex flex-col gap-[32px] py-[32px] w-full">
        {/* Profile Icon - 중앙 정렬 */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% rounded-[62px] shrink-0 size-[62px]" />
        </div>

        {/* Text Lines */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-full" />
          <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-[228px]" />
        </div>

        {/* Button */}
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[48px] rounded-[12px] shrink-0 w-full" />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#F3F3F3] my-[20px]" />

      {/* Menu List Skeleton */}
      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
        {[...Array(3).keys()].map((i) => (
          <div key={i} className="content-stretch flex items-center justify-between px-[16px] py-[18px] h-[52px] rounded-[16px] w-full">
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-[62px]" />
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% rounded-[8px] shrink-0 size-[16px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

// 사주 정보 등록 상태 스켈레톤 (전체 페이지)
export function ProfileSkeletonWithSaju() {
  return (
    <div className="animate-pulse">
      {/* Profile Section */}
      <div className="content-stretch flex flex-col gap-[16px] py-[32px] w-full">
        {/* Profile Image & Text */}
        <div className="content-stretch flex gap-[12px] items-center w-full">
          {/* Profile Image */}
          <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% border border-[rgba(239,239,239,0.05)] rounded-[12px] shrink-0 size-[72px]" />
          
          {/* Text Group */}
          <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-[142px]" />
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-full max-w-[205px]" />
          </div>
        </div>

        {/* Detail Box */}
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[43px] rounded-[8px] shrink-0 w-full" />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#F3F3F3] my-[20px]" />

      {/* Menu List Skeleton */}
      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
        {[...Array(3).keys()].map((i) => (
          <div key={i} className="content-stretch flex items-center justify-between px-[16px] py-[18px] h-[52px] rounded-[16px] w-full">
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% h-[14px] rounded-[20px] shrink-0 w-[62px]" />
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] to-[#f0f0f0] to-50% rounded-[8px] shrink-0 size-[16px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
