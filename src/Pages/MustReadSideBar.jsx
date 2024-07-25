import React from 'react'

export default function MustReadSideBar() {
  return (
    <>
        <div className="mt-6 mb-5 relative flex items-center">
            <h4 className="text-red text-sm uppercase pl-8 pr-4 flex-shrink-0 inner-box font-bold">MUST READ</h4>
            <div className="border-y border-dark-gray p-1 w-full"></div>
        </div>

                            {
        [1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="grid grid-cols-12 gap-5 border-b border-greyb pb-5 mb-5">
                <div className="col-span-4">
                    <img src={`img/must-read-${i}.png`} alt="" className="w-full lg:h-full object-cover rounded-[10px]" />
                </div>
                <div className="col-span-8">
                    <span className="text-[8px] text-red block font-openSans font-semibold uppercase">FEATURE</span>
                    <p className="font-bold text-xs wow fadeInDown">Post office launches probe to review role of ‘untouchable’ investigators</p>
                </div>
            </div>
        ))
    }
      </>
  )
}
