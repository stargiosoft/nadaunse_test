/**
 * 홈 화면 스켈레톤 로더
 * - 초기 로딩 중 표시되는 스켈레톤 UI
 * - 깜빡임 없는 부드러운 로딩 경험 제공
 */

export function SkeletonFeaturedCard() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full animate-pulse">
      <div className="box-border relative shrink-0 w-full">
        <div className="box-border content-stretch w-full">
          <div className="w-full">
            <div className="box-border content-stretch w-full">
              <div className="flex flex-col gap-[12px] items-center justify-center w-full">
                {/* Thumbnail Skeleton */}
                <div className="aspect-[350/220] relative rounded-[16px] shrink-0 w-full bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer">
                  <div className="absolute inset-[-1px] rounded-[17px] border border-[#f9f9f9]" />
                </div>

                {/* Title and Label Skeleton */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border flex flex-col gap-[4px] items-start px-[4px]">
                    {/* Title lines */}
                    <div className="h-[23px] w-[85%] bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer rounded-[4px]" />
                    
                    {/* Label */}
                    <div className="h-[28px] w-[70px] bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer rounded-[8px] mt-[4px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonContentCard() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-auto items-start justify-start px-0 py-[10px] relative rounded-[16px] shrink-0 w-full animate-pulse">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full overflow-hidden">
        {/* Thumbnail Skeleton */}
        <div className="h-[54px] relative rounded-[12px] shrink-0 w-[80px] bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer">
          <div className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
        </div>
        
        {/* Content Skeleton */}
        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0 overflow-hidden">
          {/* Title */}
          <div className="h-[17px] w-[80%] bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer rounded-[4px] mt-[2px]" />
          
          {/* Label */}
          <div className="h-[20px] w-[66px] bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0] bg-[length:200%_100%] animate-shimmer rounded-[4px] mt-[2px]" />
        </div>
      </div>
    </div>
  );
}

export function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
          <path d="M0 0.5H350" stroke="#F9F9F9" />
        </svg>
      </div>
    </div>
  );
}

export default function HomeSkeleton() {
  return (
    <>
      {/* Featured Card Skeleton */}
      <SkeletonFeaturedCard />
      <Divider />
      
      {/* Content Cards Skeleton (3개) */}
      <SkeletonContentCard />
      <Divider />
      <SkeletonContentCard />
      <Divider />
      <SkeletonContentCard />
    </>
  );
}
