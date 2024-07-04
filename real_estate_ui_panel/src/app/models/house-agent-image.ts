import { HouseAgent } from "./house-agent";

export class HouseAgentImage {
    imageId?: string; // Optional because it might be auto-generated
    imageName!: string;
    profileImage!: ArrayBuffer; // Use ArrayBuffer to represent binary data
    houseAgentData!: HouseAgent;
  }
