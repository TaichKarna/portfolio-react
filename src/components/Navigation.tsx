import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, User, FolderOpen, BookOpen } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'home', icon: Home },
    { path: '/about', label: 'about', icon: User },
    { path: '/projects', label: 'projects', icon: FolderOpen },
    { path: '/blog', label: 'blog', icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop: Vertical floating navbar on left */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-2 bg-background/90 backdrop-blur-md border border-border rounded-2xl p-3 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl transition-all",
                  active
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile: Floating rounded navbar on bottom */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
        <div className="flex items-center justify-around bg-background/90 backdrop-blur-md border border-border rounded-full p-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-full transition-all min-w-[60px]",
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
