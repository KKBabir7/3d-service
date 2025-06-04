


import Link from 'next/link';

// Import JSON data for 2D and 3D blogs
import LocalDataFor2D from '../../../public/data/blog2D.json';
import LocalDataFor3D from '../../../public/data/blog3D.json';
import Image from 'next/image';

const IndustryTrends = () => {
  // Function to sort data by date in descending order
  const sortByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Get the latest 2D and 3D blog entries
  const latest2DBlog = sortByDate(LocalDataFor2D)[0];
  const latest3DBlog = sortByDate(LocalDataFor3D)[0];

  return (
    <div id="trends">
      {/* Header Section */}
      <div className="flex justify-center gap-7 mb-5">
        <div className="w-[50px] sm:w-[400px] border-b border-[#FF6900]"></div>
        <h2 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 text-center font-bold">
          INDUSTRY TRENDS
        </h2>
        <div className="w-[50px] sm:w-[400px] border-b border-[#FF6900]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto commonContainer">
        <div className="flex flex-col lg:px-28 md:grid md:grid-cols-2 justify-items-center justify-center gap-3 pt-10 md:pt-20">
          {/* 2D Trends Section */}
          {latest2DBlog && (
            <Link aria-label="2d industry trends" className="flex w-full flex-col" href="/blog/2d">
              <div className="relative">
                {/* Image Container */}
                <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
                  {/* <img
                    className="w-full h-full object-cover"
                    src={latest2DBlog.thumb}
                    alt={`${latest2DBlog.title} thumbnail`}
                  /> */}
                  <Image
  src={latest2DBlog.thumb}
  alt={`${latest2DBlog.title} thumbnail`}
  width={600}   // Set width based on your layout
  height={400}  // Set height to maintain the aspect ratio
  className="w-full h-full object-cover"
/>
                  <div className="absolute flex gap-2 items-end right-0 bottom-0">
                    <p className="text-white text-[26px]">2D</p>
                    <div className="w-[110px] border-b border-white mb-[10px]"></div>
                  </div>
                  <p className="text-xs blogposterdate">{latest2DBlog.date}</p>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-items-center pt-5 gap-3">
                  <div className="flex flex-col  justify-items-start items-left gap-1">
                    <h3 className="text-sm">
                      {latest2DBlog.title} 
                      
                    </h3>

                  </div>
                  <div className="flex justify-center items-center">
                    <h3 className="text-xs font-medium text-white px-12 py-1 bg-[#FF6900] rounded-3xl">
                      See More
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 3D Trends Section */}
          {latest3DBlog && (
            <Link aria-label="3d industry trends" href="/blog/3d" className="flex flex-col w-full">
              <div className="relative">
                {/* Image Container */}
                <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
                  {/* <img
                    className="w-full h-full object-cover"
                    src={latest3DBlog.thumb}
                    alt={`${latest3DBlog.title} thumbnail`}
                  /> */}
                   <Image
  src={latest3DBlog.thumb}
  alt={`${latest3DBlog.title} thumbnail`}
  width={600}   // Set width based on your layout
  height={400}  // Set height to maintain the aspect ratio
  className="w-full h-full object-cover"
/>
                  <div className="absolute flex gap-2 items-end right-0 bottom-0">
                    <p className="text-white text-[26px]">3D</p>
                    <div className="w-[110px] border-b border-white mb-[12px]"></div>
                  </div>
                  <p className="text-xs" style={{position: "absolute",
    bottom: "0px",
    background: "#ffffff5c",
    padding: "5px",
    left: "0px"}}>{latest3DBlog.date}</p>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-items-center pt-5 gap-3">
                  <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3">
                    <h3 className="text-sm">
                      {latest3DBlog.title} 
                      
                    </h3>
                  </div>
                  <div className="flex justify-center items-center">
                    <h3 className="text-xs font-medium text-white px-12 py-1 bg-[#FF6900] rounded-3xl">
                      See More
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryTrends;