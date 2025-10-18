// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;
// if (!MONGODB_URI) {
//   throw new Error("Please define MONGODB_URI in .env.local");
// }

// // Prevent multiple connections in dev
// let cached = (global as any).mongoose || { conn: null, promise: null };

// export async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
//   }

//   cached.conn = await cached.promise;
//   (global as any).mongoose = cached;
//   return cached.conn;
// }
// import mongoose from "mongoose";

// // خليه ثابت عادي بدون as string
// const uri = process.env.MONGODB_URI!;

// if (!uri) {
//   throw new Error("❌ Please define the MONGODB_URI in .env.local");
// }

// let cached = (global as any).mongoose || { conn: null, promise: null };

// export async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(uri, {
//       dbName: "coffee_shop_db", // اسم قاعدة البيانات (اختياري)
//     }).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   (global as any).mongoose = cached;

//   return cached.conn;
// }
//===
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error("❌ Please define MONGODB_URI in .env.local");
// }

// let isConnected = false;

// export async function connectDB() {
//   if (isConnected) {
//     // ✅ اتصال موجود، ما نعملش reconnect
//     return;
//   }

//   try {
// const db = await mongoose.connect(MONGODB_URI, {
//   bufferCommands: false,
//   serverSelectionTimeoutMS: 5000,
// });


//     isConnected = db.connections[0].readyState === 1;
//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error:any) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     throw new Error("Database connection error");
//   }
// }

//==
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGODB_URI in .env.local");
}

// كاش عام على مستوى المشروع
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB Connected Successfully");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
