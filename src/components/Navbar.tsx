
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Schedule", href: "#schedule" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                src="/uploads/932f3af1-37d5-4654-b3d0-5fafa58dbcba.png"
                alt="NumFOCUS Logo"
                className="h-8"
              />
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-numfocus-coral px-2 py-1 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-numfocus-teal hover:bg-numfocus-teal/90">
              Donate to NumFOCUS
            </Button>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <img
                      src="/uploads/932f3af1-37d5-4654-b3d0-5fafa58dbcba.png"
                      alt="NumFOCUS Logo"
                      className="h-8"
                    />
                  </div>
                  <nav className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium text-gray-600 hover:text-numfocus-coral"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8">
                    <Button className="w-full bg-numfocus-teal hover:bg-numfocus-teal/90">
                      Donate to NumFOCUS
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
