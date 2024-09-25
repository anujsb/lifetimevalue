import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function Products() {
  return (
    <div className="mt-20 m-4">
      <h1 className="text-4xl font-semibold">Our Products</h1>
      <BentoGrid className="max-w-4xl mt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Been Verified",
    description:
      "Easy & affordable access to public records information. Search people, contact information, property, unclaimed money, emails, vehicles and even more",
    header: (
      <Image
        src="/beenvar.svg"
        width={535}
        height={35}
        alt="icon"
        className="mr-1"
      />
    ),
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bumper",
    description:
      "Provides consumers with modern day car purchasing and ownership tools including vehicle history reports",
    header: (
      <Image
        src="/bumper.svg"
        width={535}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
  {
    title: "ownerly",
    description:
      "Provides consumers with professional home value data and insights.",
    header: (
      <Image
        src="/Ownerly.svg"
        width={535}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
  {
    title: "Numberguru",
    description:
      "Provides users with the ability to search through billions of data points and explore who's behind unknown phone numbers",
    header: (
      <Image
        src="/numberguru.svg"
        width={300}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
  {
    title: "Reversephone",
    description:
      "Easy-to-use reverse phone lookup tools for consumers and professionals to learn who's calling and report spam",
    header: (
      <Image
        src="/logo-rp.svg"
        width={335}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
  {
    title: "peoplelooker",
    description:
      "Provides users with access to easy online background reports to help them feel more secure when dealing with life's different situations",
    header: (
      <Image
        src="/logo-pl.svg"
        width={335}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
  {
    title: "moneybot5000",
    description:
      "Looks through millions of unclaimed fund and asset records to help users claim potential unclaimed funds",
    header: (
      <Image
        src="/MB5K.svg"
        width={335}
        height={35}
        alt="learn more icon"
        className="mr-1"
      />
    ),
  },
];
