import { motion, AnimatePresence } from 'motion/react';

interface RelationshipBottomSheetProps {
  isOpen: boolean;
  selectedRelationship: string;
  onSelect: (relationship: string) => void;
  onClose: () => void;
}

const relationships = ['연인', '가족', '친구', '지인', '동료', '기타'];

export default function RelationshipBottomSheet({
  isOpen,
  selectedRelationship,
  onSelect,
  onClose
}: RelationshipBottomSheetProps) {
  
  const handleSelect = (relationship: string) => {
    onSelect(relationship);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-50 max-w-[390px] mx-auto"
          >
            {/* Handle */}
            <div className="bg-white relative shrink-0 w-full rounded-t-[24px]">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[12px] relative w-full">
                  <div className="bg-[#d4d4d4] h-[4px] rounded-[999px] shrink-0 w-[48px]" />
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="bg-white relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">
                      관계 선택
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="content-stretch flex flex-col gap-[28px] items-start px-[24px] py-[8px] relative shrink-0 w-full">
              {relationships.map((relationship) => (
                <div 
                  key={relationship}
                  onClick={() => handleSelect(relationship)}
                  className="relative shrink-0 w-full cursor-pointer"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">
                          {relationship}
                        </p>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]">
                        {selectedRelationship === relationship ? (
                          <div className="bg-[#48b2af] content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[20px]">
                            <div className="bg-white relative rounded-full shrink-0 size-[8px]" />
                          </div>
                        ) : (
                          <div className="bg-white relative rounded-full shrink-0 size-[20px]">
                            <div className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-full" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[20px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
                      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                        {/* 취소 버튼 */}
                        <div 
                          onClick={onClose}
                          className="basis-0 bg-[#f0f8f8] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0 cursor-pointer transition-all duration-150 ease-out active:scale-[0.98]"
                        >
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">
                                  취소
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* 선택 완료 버튼 */}
                        <div 
                          onClick={onClose}
                          className={`basis-0 ${selectedRelationship ? 'bg-[#48b2af]' : 'bg-[#f8f8f8]'} grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0 cursor-pointer transition-all duration-150 ease-out active:scale-[0.98]`}
                        >
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] ${selectedRelationship ? 'text-white' : 'text-[#b7b7b7]'}`}>
                                  선택 완료
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="bg-white h-[28px] relative shrink-0 w-full">
                <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
