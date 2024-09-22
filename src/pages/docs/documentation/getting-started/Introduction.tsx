import { Sidebar } from "@/components/ui/sidebar";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Nav";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Next } from "../../components/ui/NextPage";

export const Documentation_Introduction = () => {
  return (
    <section>
      <Navbar className="ml-[250px]" noLine />
      <Layout DocsPage>
        <Sidebar />
        <div className="mt-12 ml-[250px]">
          <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
          >
            Introduction
          </h1>
          <p className="mt-4 text-muted-foreground">
            An introduction to React Router Deluxe and it's documentation.
          </p>
          <p className="mt-4">
            React Router Deluxe is a fast, flexible router for your React
            projects that offers a clean and super easy to use syntax to make
            your routing as simple as possible with a standard default
            configuration.
          </p>
          <br />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes, React Router Deluxe offers a simple and clean syntax.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Not yet. However, you can customize it to suit your needs in the
                future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Next nextPage="Installation" id="getting-started/installation" />
      </Layout>
    </section>
  );
};
