import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b border-border/50">
      <div className="container mx-auto">
        {/* Top navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="text-primary text-2xl font-bold">›</div>
              <div className="text-lg font-semibold">
                Porto Security Center of Excellence
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              Home
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/people") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              People
            </Link>
            <Link 
              to="/capability" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/capability") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              Capability
            </Link>
            <Link 
              to="/compliance" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/compliance") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              Compliance
            </Link>
            <Link 
              to="/finance" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/finance") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              Finance
            </Link>
            <Link 
              to="/recruitment" 
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                isActive("/recruitment") ? "border-primary" : "border-transparent hover:text-primary"
              )}
            >
              Recruitment
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
        
        {/* Sub navigation - Only show for People section */}
        {location.pathname === "/people" && (
          <nav className="flex items-center gap-8 border-t border-border/30">
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-transparent hover:text-primary/70"
              )}
            >
              Team
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-primary"
              )}
            >
              Onboarding
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-transparent hover:text-primary/70"
              )}
            >
              Talent Discussion
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-transparent hover:text-primary/70"
              )}
            >
              Recognition
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-transparent hover:text-primary/70"
              )}
            >
              Offboarding
            </Link>
            <Link 
              to="/people" 
              className={cn(
                "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                "border-transparent hover:text-primary/70"
              )}
            >
              Team Events
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
