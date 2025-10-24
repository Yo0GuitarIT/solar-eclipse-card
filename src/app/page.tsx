import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

const coverImageUrl = "/albumCover.jpeg";

const MusicList = [
  {
    name: "Spotify",
    imgSrc: "https://services.linkfire.com/logo_spotify_onlight.svg",
    musicLink:
      "https://open.spotify.com/album/3b0WhPepXHm3K1YT40cN1y?si=Bi-djGF-RKydYv4Btk8X7Q",
  },
  {
    name: "Apple Music",
    imgSrc: "https://services.linkfire.com/logo_applemusic_onlight.svg",
    musicLink:
      "https://music.apple.com/tw/album/%E6%97%A5%E5%85%A8%E8%9D%95-ep/1847322570",
  },
  {
    name: "KKBox",
    imgSrc: "https://www.kkbox.com/about/img/logo/logo.svg",
    musicLink: "https://kkbox.fm/KaJzRh",
  },
  {
    name: "YouTube Music",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/YouTube_Music_logo.svg",
    musicLink:
      "https://music.youtube.com/playlist?list=OLAK5uy_lONO9pGj2MsU-8W8sBvZZ_-aCY8vOAk40&si=VBjAjH9-q4ErGXuD",
  },
  {
    name: "StreetVoice",
    imgSrc:
      "https://streetvoice.com/pages/mobile-app/static/images/logo-sv-b-s.svg",
    musicLink:
      "https://streetvoice.com/whitefrequency2016/songs/album/97324127/",
  },
  {
    name: "Line Music",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/line-music.svg",
    musicLink: "https://music-tw.line.me/album/7787184",
  },
  {
    name: "WangYiYun",
    imgSrc: "https://services.linkfire.com/logo_netease_onlight.svg",
    musicLink: "https://music.163.com/#/album?id=287789645",
  },
];

export default function Home() {
  return (
    <div
      className="bg-black/40 w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${coverImageUrl})` }}
    >
      <div className=" relative w-full  flex flex-col items-center min-h-screen gap-8 p-8 bg-cover bg-center bg-no-repeat">
        {/* 灰色濾鏡覆蓋層 */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

        {/* 內容區域 */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="border overflow-hidden flex items-center justify-center">
            <Image
              src={coverImageUrl}
              alt="Solar Eclipse"
              width={150}
              height={150}
            />
          </div>
          <Card className="w-full min-w-[350px]">
            <CardHeader>
              <CardTitle className="text-center">
                日全蝕 Solar Eclipse
              </CardTitle>
              <CardDescription className="text-center">
                White Frequency
              </CardDescription>
            </CardHeader>

            <CardContent>
              {MusicList.map((musicItem, index) => (
                <div key={musicItem.name + index}>
                  <div className="flex gap-2 items-center w-full justify-between">
                    <div className="relative h-10 w-auto min-w-[125px]">
                      <Image
                        src={musicItem.imgSrc}
                        alt={musicItem.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Link
                      href={musicItem.musicLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="cursor-pointer">
                        <PlayIcon size={32} weight="fill" />
                      </Button>
                    </Link>
                  </div>
                  {index < MusicList.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="w-full space-y-4 flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/LOGO.png"
                alt="logoImg"
                width={120}
                height={120}
                className="object-cover object-center"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <p className="text-gray-50 text-sm">
              © 2025 White Frequency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
