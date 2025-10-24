import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TextEffect } from "@/components/ui/text-effect";
import { Tilt } from "@/components/ui/tilt";
import { MUSIC_LIST } from "@/constants";

import { PlayIcon } from "@phosphor-icons/react/dist/ssr";
import Smoke from "@/components/ui/shadcn-io/smoke";

const coverImageUrl = "/albumCover.jpeg";

export default function Home() {
  return (
    <div
      className="bg-black/40 w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${coverImageUrl})` }}
    >
      <div className=" relative w-full  flex flex-col items-center min-h-screen gap-8 p-8 bg-cover bg-center bg-no-repeat">
        {/* 灰色濾鏡覆蓋層 */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 w-full h-full  overflow-hidden">
          <Smoke
            density={15}
            color="#cccccc"
            opacity={0.9}
            enableRotation={true}
            enableWind={true}
            windStrength={[0.02, 0.01, 0.01]}
            enableTurbulence={true}
            turbulenceStrength={[0.02, 0.02, 0.01]}
          />
        </div>

        {/* 內容區域 */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Tilt rotationFactor={15} isRevese>
            <div className="border border-zinc-200  overflow-hidden flex items-center justify-center">
              <Image
                src={coverImageUrl}
                alt="Solar Eclipse"
                width={150}
                height={150}
              />
            </div>
          </Tilt>
          <Card className="w-full min-w-[350px]">
            <CardHeader>
              <CardTitle className="text-center">
                <TextEffect
                  preset="fade-in-blur"
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  日全蝕 Solar Eclipse
                </TextEffect>
              </CardTitle>
              <CardDescription className="text-center">
                <TextEffect
                  preset="fade-in-blur"
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  White Frequency
                </TextEffect>
              </CardDescription>
            </CardHeader>

            <CardContent>
              {MUSIC_LIST.map((musicItem, index) => (
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
                  {index < MUSIC_LIST.length - 1 && (
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
