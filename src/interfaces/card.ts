import { ReactNode } from "react";

export interface Card {
  image: ReactNode;
  //   image: React.FunctionComponent<
  //     React.SVGProps<SVGSVGElement> & {
  //       title?: string | undefined;
  //     }
  //   >;
  color: string;
  label: string | number;
  isRemoved: boolean;
}
