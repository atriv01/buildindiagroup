export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Build India Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
