import Datafetcing from "./component/Datafetcing";

// import Image from "next/image";
export default function Home() {
  return (
   <>
   <h1 className="text-center bg-pink-200 text-black font-[800] text-3xl py-4   " >I am admin page </h1>
   <Datafetcing></Datafetcing>
    {/* <Image
      src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
      alt="Picture of the author"
      width={1360}
      height={400}
    /> */}
   </>
  );
}
