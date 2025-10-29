import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  id: string;
  subsections?: { label: string; id: string }[];
}

interface SideMenuProps {
  items: MenuItem[];
}

const SideMenu = ({ items }: SideMenuProps) => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="w-64 bg-card/30 border-r border-border/50 min-h-screen sticky top-0">
      <nav className="p-6 space-y-2">
        <h3 className="text-sm font-semibold text-primary mb-4">People Team</h3>
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full text-left px-4 py-2 text-sm transition-colors rounded-md hover:bg-secondary/50",
                item.label === "CV" && "font-semibold border-l-4 border-primary bg-secondary/30"
              )}
            >
              {item.label}
            </button>
            {item.subsections && (
              <div className="ml-4 mt-1 space-y-1">
                {item.subsections.map((sub, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => scrollToSection(sub.id)}
                    className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/30"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;
