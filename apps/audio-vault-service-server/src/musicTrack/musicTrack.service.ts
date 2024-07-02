import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MusicTrackServiceBase } from "./base/musicTrack.service.base";

@Injectable()
export class MusicTrackService extends MusicTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
