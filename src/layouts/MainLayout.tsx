import type React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-linear-to-t from-white to-blue-300 dark:from-slate-900 dark:to-gray-950 dark:bg-gray-950">
      <section className="flex items-center justify-center h-screen gap-2">{children}</section>
    </div>
  );
}

export default MainLayout;
