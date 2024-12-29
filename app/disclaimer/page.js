import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <div className='bg-white h-[1000px]'>
        <div className="flex flex-col justify-center items-center py-6">
          <div className="w-[95%]">
            <h1 className="text-4xl font-bold text-center text-black">
              Disclaimer
            </h1>
            <div className="p-6">
              <p className="text-black mb-4 h-[80px] text-[20px]">
                Micro-Sonic.online operates as a completely independent third-party company, unaffiliated with any printer brand and not involved in associate programs, affiliate advertising, or product endorsements. We strive to provide comprehensive printer information, but cannot guarantee its absolute accuracy or compatibility with your specific model. We strongly recommend users carefully review this disclaimer to understand the information presented. Additionally, we do not host external links on our website. If you encounter any, please inform us for prompt removal. Brand names and logos are used solely for representation and do not imply endorsement. Ultimately, users are responsible for ensuring the compatibility of any printer content (cartridges, toner, etc.) with their device. We recommend consulting your printer manual or manufacturer’s website for definitive compatibility information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer
