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

export const Documentation_Installation = () => {
  return (
    <section>
      <Navbar className="ml-[250px]" noLine />
      <Layout DocsPage>
        <Sidebar />
        <div className="mt-12 ml-[250px]">
          <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
          >
            Installation
          </h1>
          <p className="mt-4 text-muted-foreground">
            A simple installation guide to get started with React Router Deluxe.
          </p>
          <p className="mt-4"></p>
        </div>
        <Next nextPage="Installation" id="getting-started/installation" />
      </Layout>
    </section>
  );
};
