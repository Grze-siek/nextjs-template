import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function StudioNavbar(props: any) {
  const handleExitPreview = async () => {
    await fetch('/api/exit-preview'); // Change the API endpoint path if needed
  };
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/api/exit-preview">
          <div
            onClick={handleExitPreview}
            className="flex items-center rounded-sm transition-colors p-2 hover:bg-[#9b8670] space-x-2 text-red-800"
          >
            <RiArrowGoBackFill className="h-6 w-6" />
            <p>Strona główna</p>
          </div>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
