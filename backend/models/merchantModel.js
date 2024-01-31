const MerchantSchema = new Schema(
  {
    name: { type: String },
    ownerName: { type: String },
    pincode: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean },
    coverImages: { type: string },
    rating: { type: Number },
    products: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
      },
    ],
    lat: { type: Number },
    lng: { type: Number },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Vendor = mongoose.model("Merchant", MerchantSchema);

export { Vendor };
