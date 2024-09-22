import { ChevronRight } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  className?: string;
  nextPage?: string;
  id: string;
}

const NextPage = ({ className, nextPage, id }: Props) => {
  return (
    <a href={`/docs/${id}`}>
      <Alert className={`ml-[250px] mt-12 w-fit ${className} cursor-pointer`}>
        <ChevronRight className="h-4 w-4" />
        <AlertTitle>Next page</AlertTitle>
        <AlertDescription className="text-muted-foreground font-medium">
          {nextPage ? `${nextPage}` : ""}
        </AlertDescription>
      </Alert>
    </a>
  );
};
export const Next = ({ className, nextPage, id }: Props) => {
  return <NextPage className={className} nextPage={nextPage} id={id} />;
};
