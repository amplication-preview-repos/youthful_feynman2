/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MusicTrack as PrismaMusicTrack } from "@prisma/client";

export class MusicTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MusicTrackCountArgs, "select">
  ): Promise<number> {
    return this.prisma.musicTrack.count(args);
  }

  async musicTracks(
    args: Prisma.MusicTrackFindManyArgs
  ): Promise<PrismaMusicTrack[]> {
    return this.prisma.musicTrack.findMany(args);
  }
  async musicTrack(
    args: Prisma.MusicTrackFindUniqueArgs
  ): Promise<PrismaMusicTrack | null> {
    return this.prisma.musicTrack.findUnique(args);
  }
  async createMusicTrack(
    args: Prisma.MusicTrackCreateArgs
  ): Promise<PrismaMusicTrack> {
    return this.prisma.musicTrack.create(args);
  }
  async updateMusicTrack(
    args: Prisma.MusicTrackUpdateArgs
  ): Promise<PrismaMusicTrack> {
    return this.prisma.musicTrack.update(args);
  }
  async deleteMusicTrack(
    args: Prisma.MusicTrackDeleteArgs
  ): Promise<PrismaMusicTrack> {
    return this.prisma.musicTrack.delete(args);
  }
}
