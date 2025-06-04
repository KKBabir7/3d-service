'use client'; // শুধুমাত্র ক্লায়েন্ট সাইডে রেন্ডার হবে


export default function Loader() {
  return (
    <div className='loaderContainer'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  );
}