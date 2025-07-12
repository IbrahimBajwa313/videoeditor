import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

// Replace with your MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://your-connection-string"
const client = new MongoClient(MONGODB_URI)

async function connectToDatabase() {
  await client.connect()
  return client.db("video-portfolio")
}

export async function GET() {
  try {
    const db = await connectToDatabase()
    const projects = await db.collection("projects").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await connectToDatabase()

    const project = {
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const result = await db.collection("projects").insertOne(project)

    return NextResponse.json(
      {
        message: "Project created successfully",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
