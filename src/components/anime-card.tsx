import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import { IAnime, LatestCompletedAnime } from "@/types/anime";

type Props = {
  className?: string;
  anime: IAnime | LatestCompletedAnime;
  displayDetails?: boolean;
  variant?: "sm" | "lg";
  href?: string;
  showGenre?: boolean;
};

const isLatestAnime = (
  anime: IAnime | LatestCompletedAnime
): anime is LatestCompletedAnime => {
  return (anime as LatestCompletedAnime).duration !== undefined;
};

const AnimeCard = ({
  displayDetails = true,
  // showGenre = true,
  variant = "sm",
  ...props
}: Props) => {
  return (
    <Link href={props.href || `${ROUTES.ANIME_DETAILS}/${props.anime.id}`}>
      <div
        className={cn([
          "rounded-xl overflow-hidden relative cursor-pointer hover:scale-105 duration-300",
          variant === "sm" &&
            "h-[15.625rem] min-w-[12.625rem] max-w-[12.625rem] md:h-[18.75rem] md:max-w-[12.5rem]",
          ,
          variant === "lg" &&
            "max-w-[12.625rem] md:max-w-[18.75rem] h-auto md:h-[25rem] shrink-0 lg:w-[18.75rem]",
          props.className,
        ])}
      >
        <Image
          src={props.anime.poster}
          alt="image"
          height={100}
          width={100}
          className="w-full h-full object-cover"
          unoptimized
        />
        {displayDetails && (
          <>
            <div className="absolute inset-0 m-auto h-full w-full bg-gradient-to-t from-[#000000a9] to-transparent"></div>
            <div className="absolute bottom-0 flex flex-col gap-1 px-4 pb-3">
              <h5 className="line-clamp-2">{props.anime.name}</h5>
              {isLatestAnime(props.anime) && props.anime.duration !== "?" && (
                <span>{props.anime.duration}</span>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default AnimeCard;

