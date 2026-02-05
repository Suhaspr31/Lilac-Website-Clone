import Link from 'next/link';

export default function NotFoundContent() {
  return (
    // Matches the beige/sand background tone of the site
    <div className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-32 bg-[#F5F5F0] text-[#2D3748]">
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-lg md:text-xl font-sans mb-8">
          We couldn&apos;t find the page you were looking for. This is either because:
        </p>
        
        <ul className="list-disc pl-5 space-y-4 mb-12 font-sans text-base md:text-lg">
          <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        
        <p className="font-sans text-base md:text-lg">
          You can return to our homepage by clicking <Link href="/" className="underline hover:text-[#4A6741] transition-colors">here</Link>, or you can try searching for the content you are seeking by clicking here.
        </p>
      </div>
    </div>
  );
}