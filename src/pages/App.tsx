import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Nav";

import { Button } from "@/components/ui/button";

import screenshot from "/assets/Example_Screenshot.png";

export const App = () => {
  return (
    <section>
      <Navbar />
      <Layout>
        <div className="text-center flex flex-col justify-center items-center mt-[100px]">
          <h1
            className={`geist-sans scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl`}
          >
            A fast, flexible router for React
          </h1>
          <p className="text-muted-foreground max-w-[500px] mt-2">
            React Router Deluxe is a fast, flexible router for React that offers
            a clean and super easy to use syntax.
          </p>
          <div className="mt-5 gap-2">
            <Button variant={"default"}>Get Started</Button>
            <a href="https://github.com/react-router-deluxe" target="_blank">
              <Button variant={"ghost"}>Github</Button>
            </a>
          </div>
          <div>
            <img src={screenshot} className="rounded-[2rem] h-[500px] mt-12" />
          </div>
        </div>
      </Layout>
    </section>
  );
};
