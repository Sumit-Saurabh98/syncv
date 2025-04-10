import mongoose from "mongoose";
import { IRoom } from "../utils/interfaces.js";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      default: "",
    },
    videoId: {
      type: String,
      default: "",
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      }
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    accessCode: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    participants: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["host", "participant"],
          default: "participant",
        },
      },
    ],
    videoState: {
      isPlaying: {
        type: Boolean,
        default: false,
      },
      playbackRate: {
        type: Number,
        default: 1,
      },
      seekTo: {
        type: Number,
        default: 0
      }
    }
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model<IRoom>("Room", roomSchema);

export default Room;
