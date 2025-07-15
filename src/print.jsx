"use client";

function Print() {
  return (
    <>
{/* main container */}
<div className="bg-white h-[600px] w-[700px] rounded-2xl shadow-2xl p-5 text-white">
  {/* container for photo and qrcanner */}
  <div className="flex flex-row justify-around items-center mb-6 bg-white h-56 rounded-xl shadow-inner px-4">
    {/* photo */}
    <div className="">
      <img
        src="/man.jpg"
        className="w-52 h-52 object-cover  border-4 shadow-lg"
        alt="Profile"
      />
    </div>
    {/* qrscanner */}
    <div className="  ">
      <img
        src="/man.jpg"
        className="w-52 h-52 object-cover  border-4 shadow-lg"
        alt="QR Code"
      />
    </div>
  </div>

  <div className="font-semibold text-black text-center space-y-1 flex flex-col  h-72 justify-center">
    <h1 className="text-4xl tracking-wide font-bold">Shree Krishna Pandey</h1>
    <h2 className="text-2xl uppercase text-gray-800">Managing Director</h2>
    <h3 className="text-2xl italic text-gray-600">Flame Off</h3>
  </div>
</div>


    </>
  );
}
export default Print;
