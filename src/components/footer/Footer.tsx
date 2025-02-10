

export default function Footer() {
  return (
    <footer className="pb-5">
      <div className="container mx-auto px-6 pt-6 border-t  border-heroUI-border">

        <div className="flex flex-col w-full  items-center ">
          <div className="flex items-center space-x-2 text-2xl font-semibold">
            <span>BlackSnow</span>
          </div>
          <p className="mt-2 text-gray-400">Your one-stop shop for everything trendy.</p>
        </div>
        </div>

      <div className="text-center text-gray-500 text-sm mt-8 ">
        &copy; {new Date().getFullYear()} BlackSnow. All rights reserved.
      </div>
    </footer>
  );
}
