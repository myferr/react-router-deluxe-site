export const LoadTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.getElementById("html")?.setAttribute("class", "dark");
  } else {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.getElementById("html")?.setAttribute("class", "light");
    }
  }
};

LoadTheme();

localStorage.setItem(
  "theme",
  document.getElementById("html")?.getAttribute("class") || "dark"
);

interface Props {
  children?: React.ReactNode;
  DocsPage?: boolean;
}

import { Separator } from "../ui/separator";

import "../../styles/index.css";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="my-12">
      <Separator />
      <div className="mt-5 text-muted-foreground">
        Built by{" "}
        <a
          href="https://github.com/myferr"
          className="text-foreground font-medium hover:underline-offset-4 underline"
        >
          @myferr
        </a>
      </div>
    </footer>
  );
};

export const Layout = ({ children, DocsPage }: Props) => {
  return (
    <section>
      <main className="m-3">
        <div className="ml-4">
          <div>{children}</div>
        </div>
        {DocsPage ? null : <Footer />}
      </main>
    </section>
  );
};
