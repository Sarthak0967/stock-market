import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL || "";

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;

if(!cached){
    cached = global.mongooseCache = {conn: null, promise: null};
}

export const connectToDatabase = async () => {
    if(!MONGODB_URI){
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false})
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error('Error connecting to MongoDB:', error);
    }

    console.log(`Connected to MongoDB: ${process.env.NODE_ENV} ${MONGODB_URI}`);

    return cached.conn;
}