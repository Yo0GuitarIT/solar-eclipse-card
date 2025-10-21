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
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function Home() {
  const MusicList = [
    {
      name: "Spotify",
      imgSrc: "https://services.linkfire.com/logo_spotify_onlight.svg",
      musicLink:
        "https://open.spotify.com/artist/4tREKMNVSLyiI0K6IhgHVc?si=de1dP930T6e_9uVG2s_IYw",
    },
    {
      name: "YouTube Music",
      imgSrc: "https://services.linkfire.com/logo_youtube_onlight.svg",
      musicLink:
        "https://music.youtube.com/channel/UCVY1s-SKQrfCnZPWXAYvm-A?si=BnkdaM_gfc-23w36",
    },
    {
      name: "Apple Music",
      imgSrc: "https://services.linkfire.com/logo_applemusic_onlight.svg",
      musicLink:
        "https://music.apple.com/tw/artist/%E7%99%BD%E9%A0%BB%E7%8E%87/1428600777",
    },
    {
      name: "kkbox",
      imgSrc: "https://www.kkbox.com/about/img/logo/logo.svg",
      musicLink: "https://kkbox.fm/op0DiX",
    },
  ];

  return (
    <div
      className="bg-black/40 w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/albumCover.jpeg)" }}
    >
      <div className=" relative w-full  flex flex-col items-center min-h-screen gap-8 p-8 bg-cover bg-center bg-no-repeat">
        {/* 灰色濾鏡覆蓋層 */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

        {/* 內容區域 */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="border  overflow-hidden flex items-center justify-center">
            <Image
              src="/albumCover.jpeg"
              alt="Solar Eclipse"
              width={150}
              height={150}
            />
          </div>
          <Card className="w-full min-w-[350px]">
            <CardHeader>
              <CardTitle>日全蝕 Solar Eclipse</CardTitle>
              <CardDescription>by White Frequency</CardDescription>
            </CardHeader>

            <CardContent>
              {MusicList.map((musicItem) => (
                <div key={musicItem.name}>
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
                      <Button variant="secondary" className="cursor-pointer">
                        <PlayIcon size={32} weight="fill" />
                      </Button>
                    </Link>
                  </div>
                  <Separator className="my-4" />
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="w-full space-y-4 flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="logoImg"
                width={100}
                height={100}
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
