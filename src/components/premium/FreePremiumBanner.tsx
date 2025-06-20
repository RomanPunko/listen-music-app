// import { type FC, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { TbXboxX } from "react-icons/tb";

// const FreePremiumBanner: FC = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <div
//       className="relative w-full flex items-center justify-between p-4 md:p-6
//                  bg-gradient-to-r from-purple-700 to-pink-600 text-text
//                  rounded-xl shadow-lg overflow-hidden mb-4"
//     >
//       <div className="flex flex-col md:flex-row md:items-center w-full">
//         <div className="flex-grow pr-4 mb-4 md:mb-0">
//           <h2 className="text-xl md:text-2xl font-bold mb-1">Try Premium for free</h2>
//           <p className="text-sm md:text-base text-neutral-200">
//             Get 2 months of Premium for free. Listen to music ad-free, offline, and in high quality.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-3">
//           <Button variant="default" className="bg-white text-purple-700 hover:bg-purple-100 cursor-pointer">
//             Try for 2 weeks
//           </Button>
//           <Button
//             onClick={handleClose}
//             variant="outline"
//             className="border-white text-white hover:text-purple-700 hover:bg-white cursor-pointer"
//           >
//             Not now
//           </Button>
//         </div>
//       </div>
//       <TbXboxX onClick={handleClose} size={18} className='absolute right-1 top-1 cursor-pointer'/>
//     </div>
//   );
// };

// export default FreePremiumBanner;
