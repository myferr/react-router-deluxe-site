import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// @ts-expect-error
const NavItem = ({ label }) => (
  <Button variant="link" className="w-full justify-start">
    <span className="ml-[6.8px] text-[#a1a1aa]">{label}</span>
  </Button>
);

// @ts-expect-error
const NavCategory = ({ label }) => (
  <>
    <Button variant="ghost" className="w-full justify-start mt-12">
      <span className="ml-[6.8px]">{label}</span>
    </Button>
  </>
);

// @ts-expect-error
const NavLabel = ({ label }) => (
  <>
    <Button variant="ghost" className="w-full justify-start mt-5">
      <span className="ml-[6.8px]">{label}</span>
    </Button>
  </>
);

export const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 h-full w-[220px] transition-all duration-200 bg-background  z-40"
    >
      <ScrollArea className="h-full">
        <div className="p-2">
          <nav className="space-y-2">
            <div>
              <NavCategory label={"Getting Started"} />
              <NavItem label={"Introduction"} />
              <NavItem label={"Installation"} />
              <NavItem label={"Examples"} />
              <NavCategory label={"Router"} />
              <NavItem label={"Index Page"} />
              <NavItem label={"Router.Render"} />
              <NavItem label={"Router.Routes"} />
            </div>
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
};
