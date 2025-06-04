

import CircleStyle from './circleStyle';

const Record = () => {
    return (
        <>
        
        <div className='bg-white pb-6'>
            <div className='flex justify-center gap-7 pt-20 pb-10'>
                    <div className='w-[50px] sm:w-[400px] border-b border-[#FF6900]'></div>
                    <h2 className='text-[28px] md:text-[40px]  -mb-2 lg:-mb-4 font-bold'>SUCCESS RECORD</h2>
                    <div className='w-[50px] sm:w-[400px] border-b border-[#FF6900]'></div>
                </div>
            <div className='bg-kow-green h-[200px]'></div>
            <div className='pb-15'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-11'>
                        <div className='grid grid-cols-1 gap-24 md:gap-0 md:grid-cols-4 justify-items-center -mt-24'>
                            <CircleStyle count="30M" title="2D Assets"  recordTime="2022-23" />
                            <CircleStyle count="280K" title="3D Assets"  recordTime="2022-23"/>
                            <CircleStyle count="60K" title="Video Assets"  recordTime="2022-23" />
                            <CircleStyle count="8M" title="Backgrounds Removed"  recordTime="2022-23" />
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
        </>
        
    );
};

export default Record;