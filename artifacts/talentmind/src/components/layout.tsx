import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LayoutDashboard, Briefcase, Users, BarChart3, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { TalentMindLogo } from "./logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/candidates", label: "Candidates", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
];

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size={compact ? "icon" : "default"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={compact ? "" : "w-full justify-start px-2 gap-2"}
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {!compact && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
    </Button>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [location] = useLocation();
  return (
    <nav className="flex flex-col gap-1 p-2">
      {navItems.map((item) => {
        const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            data-testid={`link-nav-${item.label.toLowerCase()}`}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors min-h-[44px]",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5">
          <TalentMindLogo size={28} />
          <div>
            <div className="font-bold text-lg leading-tight text-sidebar-foreground">TalentMind AI</div>
            <div className="text-xs text-sidebar-foreground/50 font-medium">AI-Powered Recruiting</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <NavLinks onNavigate={onNavigate} />
      </div>
      <div className="p-2 border-t border-sidebar-border">
        <ThemeToggle />
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-60 md:flex-col md:shrink-0 border-r border-border">
        <SidebarContent />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Mobile header */}
        <header className="md:hidden flex items-center justify-between px-4 h-14 border-b border-border bg-background sticky top-0 z-40">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 bg-sidebar border-sidebar-border">
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <TalentMindLogo size={24} />
            <span className="font-bold text-base text-foreground">TalentMind AI</span>
          </div>

          <ThemeToggle compact />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
