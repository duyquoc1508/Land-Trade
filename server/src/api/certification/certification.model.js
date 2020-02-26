import mongoose from "mongoose";
const Schema = mongoose.Schema;

const certificationSchema = new Schema(
  {
    // owner: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    //   }
    // ],
    owners: [
      {
        type: String // multiple publicAddress of user
      }
    ],
    title: {
      type: String
    },
    attestor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    // II. Land lot, house and other properties attaching with land
    properties: {
      landLot: {
        landLotNo: Number,
        mapSheetNo: Number,
        address: String,
        area: Number, //m2
        formOfUse: {
          private: Number, //m2
          common: Number //m2
        },
        purposeOfUse: String,
        timeOfUse: String,
        originOfUse: String
      },
      house: {
        address: String,
        houseType: String,
        apartmentName: String,
        constructionArea: Number,
        floorArea: String,
        formOfOwn: String,
        level: Number,
        timeOfUse: String
      },
      otherConstruction: String,
      //production forest is an artificial forest
      prodForestIsArtificial: String,
      perennialTree: String,
      notice: String
    },
    state: {
      type: Number,
      default: 0 //0: Not activated, 1: Activated, 2: Selling
    },
    ownersActivated: [
      {
        type: String
      }
    ],
    ownersAllowedSale: [
      {
        type: String
      }
    ],
    imagesBase64: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
